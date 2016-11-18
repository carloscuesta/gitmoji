'use strict';

const PDFDocument = require('pdfkit');
const fs = require('fs');
const loadEmoji = require('./loadEmoji');

// Check if directories exists, otherwise create them.
if(!fs.existsSync('../../dist/')) {
    fs.mkdirSync('../../dist');
    fs.mkdirSync('../../dist/pdf');
    fs.mkdirSync('../../dist/pdf/emojis');
} else if(!fs.existsSync('../../dist/pdf')){
    fs.mkdirSync('../../dist/pdf');
    fs.mkdirSync('../../dist/pdf/emojis');
}

loadEmoji(":art:", function (err, emoji) {
    console.log(emoji.path);
});

var doc = new PDFDocument;
doc.pipe(fs.createWriteStream('../../dist/pdf/cheatsheet.pdf'));

doc.fontSize(24).text('Gitmoji Cheatsheet');

doc.end();