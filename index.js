import express from "express";
import { characterCount } from "./api/character-count/index.js";
import { sentenceCount } from "./api/sentence-count/index.js";
import { wordCount } from "./api/word-count/index.js";

const app = express();
app.use(express.json());

app.route("/")
    .get((_req, res) => {
        res.send("Hello WSD!");
    });

app.route("/api/character-count/")
    .post((req, res) => {
        characterCount(req, res);
    });

app.route("/api/sentence-count/")
    .post((req, res) => {
        sentenceCount(req, res);
    });

app.route("/api/word-count/")
    .post((req, res) => {
        wordCount(req, res);
    });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
