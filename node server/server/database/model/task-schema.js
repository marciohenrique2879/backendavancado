const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
    userId: Number,
    description: String,
    finished:   { type: Boolean, default: false },
    createAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('task',taskSchema);

