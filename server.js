const path = require("path");
const express = require("express");
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "/dist/smartia-logging-ng/browser"), {maxAge: 31557600000}));

// Send all requests to index.html
app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "/dist/smartia-logging-ng/browser/index.html"));
});

// default Heroku port
app.listen(process.env.PORT || 5000);
