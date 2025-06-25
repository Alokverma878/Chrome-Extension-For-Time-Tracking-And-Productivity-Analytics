const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    url: String,
    timeSpent: Number,
    date: String,
    category: String
});

module.exports = mongoose.model("WebsiteData", schema);
