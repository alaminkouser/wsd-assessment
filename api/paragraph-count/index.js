import express from "express";

/**
 * Paragraph Count API
 * The API will return the number of paragraphs in a text
 * The API body must be a JSON object with a key "text" and a value of type "string"
 * Example: { "text": "Hello World.\nHow are you?" }
 * The API will return a JSON object with a key "count" and a value of type "number"
 * Example: { "count": 2 }
 * @param {express.Request} req
 * @param {express.Response} res
 */
export const paragraphCount = (req, res) => {
    console.log("Request received");
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
        return res.json({ count: 0 }); // <-- If the text is empty, there are no paragraphs.
    }
    let count = 1; // <-- If the text is not empty, there is at least one paragraph.
    let text = req.body.text.replace(/(\r\n|\r|\n)+/g, "\n");
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "\n") {
            count++;
        }
    }
    return res.json({ count: count });
}