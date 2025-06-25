const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const WebsiteData = require("./models/WebsiteData");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/timetracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.post("/track", async (req, res) => {
    const { url, timeSpent, date, category } = req.body;
    await WebsiteData.create({ url, timeSpent, date, category });
    res.status(201).send("Data stored.");
});

app.get("/report", async (req, res) => {
    const data = await WebsiteData.find({});
    res.json(data);
});

app.listen(3000, () => {
    console.log("Backend running on http://localhost:3000");
});
