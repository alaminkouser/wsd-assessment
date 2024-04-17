import express from "express";

/**
 * Longest Words in Paragraphs API
 * The API will return the longest word in each paragraph of a text
 * The API body must be a JSON object with a key "text" and a value of type "string"
 * Example: { "text": "Hello WSD.\nHow are you?" }
 * The API will return a JSON object with a key "longestWordList" and a value of type "array"
 * Example: { "longestWordList": [["Hello"], ["How", "you"]] }
 * @param {express.Request} req
 * @param {express.Response} res
 */
export const longestWordsInParagraphs = (req, res) => {
    console.log("Request received: longestWordsInParagraphs");
    if (req.method !== "POST") {
        return res.status(405).send("Method Not Allowed");
    }
    if (req.headers["content-type"] !== "application/json") {
        return res.status(400).send("Bad Request");
    }
    if (!req.body || !req.body.text) {
        return res.status(400).send("Bad Request");
    }
    if (typeof req.body.text !== "string") {
        return res.status(400).send("Bad Request");
    }
    if (req.body.text.length === 0) {
        return res.json({ words: [] });
    }
    let longestWordsInEachParagraphs = [];
    let text = req.body.text.replace(/(\r\n|\r|\n)+/g, "\n").trim();
    let paragraphs = text.split("\n");
    for (let paragraph of paragraphs) {
        const words = paragraph.split(" ");
        let maxLength = 0;
        const longestWords = [];

        // Find the maximum length
        words.forEach(word => {
            maxLength = Math.max(maxLength, word.replace(/[^a-zA-Z0-9\-]/g, "").length);
        });

        // Find words with maximum length
        words.forEach(word => {
            if (word.replace(/[^a-zA-Z0-9\-]/g, "").length === maxLength) {
                longestWords.push(word.replace(/[^a-zA-Z0-9\-]/g, ""));
            }
        });
        longestWordsInEachParagraphs.push(longestWords);
    }
    // A paragraph can have multiple longest words.
    return res.json({ longestWordList: longestWordsInEachParagraphs });
}