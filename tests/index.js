const baseURL = "http://localhost:3000"

console.log("Endpoint: /api/word-count/");
await fetch(`${baseURL}/api/word-count/`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        text: "Hello World!"
    })
}).then((response) => {
    return response.json();
}).then((data) => {
    if (data.count === 2) {
        console.log("✅ Word count test passed");
    } else {
        console.error("❌ Word count test failed");
    }
});

console.log("Endpoint: /api/character-count/");
await fetch(`${baseURL}/api/character-count/`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        text: "Hello World!"
    })
}).then((response) => {
    return response.json();
}).then((data) => {
    if (data.count === 12) {
        console.log("✅ Character count test passed");
    } else {
        console.error("❌ Character count test failed");
    }
});

console.log("Endpoint: /api/sentence-count/");
await fetch(`${baseURL}/api/sentence-count/`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        text: "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun. I am a sentence. This is another sentence with question mark? And another one with exclamation mark!"
    })
}).then((response) => {
    return response.json();
}).then((data) => {
    if (data.count === 5) {
        console.log("✅ Sentence count test passed");
    } else {
        console.error("❌ Sentence count test failed");
    }
});

console.log("Endpoint: /api/paragraph-count/");
await fetch(`${baseURL}/api/paragraph-count/`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        text: "The quick brown fox jumps over the lazy dog.\nThe lazy dog slept in the sun.\n\nI am a paragraph.\n\nThis is another paragraph with question mark?\n\nAnd another one with exclamation mark!"
    })
}).then((response) => {
    return response.json();
}).then((data) => {
    if (data.count === 5) {
        console.log("✅ Paragraph count test passed");
    } else {
        console.error("❌ Paragraph count test failed");
    }
});

console.log("Endpoint: /api/longest-words-in-paragraphs/");
await fetch(`${baseURL}/api/longest-words-in-paragraphs/`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        text: "Hello WSD.\nHow are you?"
    })
}).then((response) => {
    return response.json();
}).then((data) => {
    if (data.longestWordList.length === 2 && data.longestWordList[0].length === 1 && data.longestWordList[1].length === 3) {
        if (data.longestWordList[1].includes("How") && data.longestWordList[1].includes("are") && data.longestWordList[1].includes("you")) {
            console.log("✅ Longest words in paragraphs test passed");
        }
    } else {
        console.error("❌ Longest words in paragraphs test failed");
    }
});