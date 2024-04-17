import express from "express";

/**
 * Word Count API
 * The API will return the number of words in a text
 * The API body must be a JSON object with a key "text" and a value of type "string"
 * Example: { "text": "Hello World" }
 * The API will return a JSON object with a key "count" and a value of type "number"
 * Example: { "count": 2 }
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
export const wordCount = (req, res) => {
    console.log("Request received: wordCount");
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
    const words = req.body.text.split(" ");
    return res.json({ count: words.length });
}
