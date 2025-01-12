const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const Image = require('../models/Image'); // Import Image schema

const router = express.Router();

const upload = multer();

// Compress image API
router.post("/api/compress", upload.single("image"), async (req, res) => {
    try {
        const { buffer } = req.file;
        const targetSize = parseInt(req.body.targetSize, 10) * 1024; // Target size in bytes

        let quality = 90; // Imitial compression quality
        let compressedBuffer;
        let currentSize = buffer.length;

        do {
            compressedBuffer = await sharp(buffer).jpeg({ quality }).toBuffer();
            currentSize = compressedBuffer.length;
            quality -= 5;
        } while ( currentSize > targetSize && quality > 10 );

        // Save metadata to MongoDB
        const originalSize = (buffer.length / 1024).toFixed(2);
        const compressedSize = (currentSize / 1024).toFixed(2);

        await Image.create({
            originalSize,
            compressedSize
        });

        res.set("Content-Type", "image/jpeg");
        res.send(compressedBuffer);
    } catch (error) {
        console.error("Error compressing image", error);
        res.status(500).json({ error: "Failed to compress image" });
    }
});

module.exports = router;