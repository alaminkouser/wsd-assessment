document.getElementById("file").onchange = function () {
    const file = this.files[0];
    const reader = new FileReader();
    reader.onload = function () {
        const endpointList = [
            "character-count",
            "longest-words-in-paragraphs",
            "paragraph-count",
            "sentence-count",
            "word-count"
        ]
        const promises = [];
        endpointList.forEach(endpoint => {
            promises.push(
                fetch(`api/${endpoint}/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ text: reader.result })
                })
            )
        });
        Promise.all(promises).then(resList => {
            return Promise.all(resList.map(res => res.json()));
        }).then(dataList => {
            for (let i = 0; i < dataList.length; i++) {
                switch (i) {
                    case 0:
                        document.getElementById("characterCount").innerText = "Characters Count: " + dataList[i].count;
                        break;
                    case 1:
                        let text = "";
                        dataList[i].longestWordList.forEach(wordList => {
                            wordList.forEach(word => {
                                text += word + "; ";
                            });
                            text = text += "\n";
                        });
                        document.getElementById("longestWordsInParagraphs").innerText = "\n\nLongest Words In Each Paragraphs:\n\n" + text;
                        break;
                    case 2:
                        document.getElementById("paragraphCount").innerText = "Paragraph Count: " + dataList[i].count;
                        break;
                    case 3:
                        document.getElementById("sentenceCount").innerText = "Sentence Count: " + dataList[i].count;
                        break;
                    case 4:
                        document.getElementById("wordCount").innerText = "Word Count: " + dataList[i].count;
                        break;
                }
            }
        })
    };
    reader.readAsText(file);
}