import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import fs from "fs";
import App from "../src/app";
const app = express();

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/index.html").toString();

const parts = html.split("not rendered");

app.use("/dist", express.static("dist"));

app.use((req, res) => {
    const reactMarkup = (
        <ServerLocation url={req.url}>
            <App />
        </ServerLocation>
    );

    res.send(parts[0] + renderToString(reactMarkup) + parts[1]);
    res.end();
});

app.listen(PORT, () => {
    console.log("Server Running at Port : " + PORT);
});