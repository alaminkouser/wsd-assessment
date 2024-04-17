import express from "express";

/**
 * Sentence Count API
 * The API will return the number of sentences in a text
 * The API body must be a JSON object with a key "text" and a value of type "string"
 * Example: { "text": "Hello World. How are you?" }
 * The API will return a JSON object with a key "count" and a value of type "number"
 * Example: { "count": 2 }
 * @param {express.Request} req
 * @param {express.Response} res
 */
export const sentenceCount = (req, res) => {
    console.log("Request received: sentenceCount");
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
    let count = 0;
    let text = req.body.text;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "." || text[i] === "?" || text[i] === "!") {
            count++;
        }
    }
    return res.json({ count: count });
}