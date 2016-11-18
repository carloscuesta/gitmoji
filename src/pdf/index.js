'use strict';

const PDFDocument = require('pdfkit');
const fs = require('fs');
const loadEmoji = require('./loadEmojis');

// Check if directories exists, otherwise create them.
if(!fs.existsSync('../../dist/')) {
    fs.mkdirSync('../../dist');
    fs.mkdirSync('../../dist/pdf');
    fs.mkdirSync('../../dist/pdf/emojis');
} else if(!fs.existsSync('../../dist/pdf')){
    fs.mkdirSync('../../dist/pdf');
    fs.mkdirSync('../../dist/pdf/emojis');
}

loadEmoji(function (emojiList) {
    console.log("Done");
});

var doc = new PDFDocument;
doc.pipe(fs.createWriteStream('../../dist/pdf/cheatsheet.pdf'));

doc.fontSize(24).text('Gitmoji Cheatsheet 🎨');

doc.end();