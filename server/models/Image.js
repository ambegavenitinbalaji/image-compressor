const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    originalName: String,
    originalSize: Number,
    compressedSize: Number,
    uploadDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Image', imageSchema);