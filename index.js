import express from "express";

const app = express();

app.route("/")
    .get((_req, res) => {
        res.send("Hello WSD!");
    });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
