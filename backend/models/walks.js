const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const walkSchema = new Schema({
name: {type: String, required: true},
difficulty: {type: String, required: true},
time: {type: Number, required: true},
location: {type: String, required: true},
}, {
    timestamps: true
});

const Walks = mongoose.model("Walks", walkSchema);

module.exports = Walks;