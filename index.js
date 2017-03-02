var express = require("express");
var path = require("path");

var app = express();
const port = 3001;


app.get("/index.html", (req, res) => {
    console.log("serving index.html");
    res.setHeader("Cache-Control", "private, max-age=5");
    res.sendFile(__dirname + "/assets/index.html");
});
app.get("/style.css", (req, res) => {
    console.log("serving style.css");
    res.setHeader("Cache-Control", "private, max-age=600");
    res.sendFile(__dirname + "/assets/style.css");
});
app.get("/debug.js", (req, res) => {
    console.log("serving debug.js");
    res.setHeader("Cache-Control", "private, max-age=5");
    res.sendFile(__dirname + "/assets/debug.js");
});
app.get("/offline.appcache", (req, res) => {
    console.log("serving offline.appcache");
    res.setHeader("Cache-Control", "private, no-cache");
    res.sendFile(__dirname + "/assets/offline.appcache");
});


// app.use(express.static(path.join(__dirname, "assets")));

app.listen(port, () => console.log("Serving static with express on :" + port));