import express from "express";

/**
 * Character Count API
 * The API will return the number of characters in a text
 * The API body must be a JSON object with a key "text" and a value of type "string"
 * Example: { "text": "Hello World" }
 * The API will return a JSON object with a key "count" and a value of type "number"
 * Example: { "count": 11 }
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
export const characterCount = (req, res) => {
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
    return res.json({ count: req.body.text.length });
}