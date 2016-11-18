'use strict';

const PDFDocument = require('pdfkit');
const fs = require('fs');
const loadEmoji = require('./loadEmojis');

const layout = {
    leftMargin: 60,
    topMargin: 100,
    emojiSpace: 38,
    emojiSize: 32,

    emojisHigh: 16,
    secondMargin: 260,

    textLeftMargin: 40,
    textDescTopMargin: 18
};

// Check if directories exists, otherwise create them.
if(!fs.existsSync('../../dist/')) {
    fs.mkdirSync('../../dist');
    fs.mkdirSync('../../dist/pdf');
    fs.mkdirSync('../../dist/pdf/emojis');
} else if(!fs.existsSync('../../dist/pdf')){
    fs.mkdirSync('../../dist/pdf');
    fs.mkdirSync('../../dist/pdf/emojis');
}

var emojiList = null;

loadEmoji(function (emojis) {
    console.log("Done fetching images");
    emojiList = emojis;

    // Wait for images to write to disk
    setTimeout(generatePDF, 1000);
});

function generatePDF() {
    console.log("Generating PDF");
    var doc = new PDFDocument;
    doc.pipe(fs.createWriteStream('../../dist/pdf/cheatsheet.pdf'));

    doc.fontSize(32).text('Gitmoji Cheatsheet', 40, 40);

    for (var i = 0; i < emojiList.length; i++) {
        var emoji = emojiList[i];

        var x = layout.leftMargin + Math.floor(i/layout.emojisHigh)*layout.secondMargin;
        var y = layout.topMargin+ layout.emojiSpace * (i%layout.emojisHigh);

        if(Math.floor(i%(layout.emojisHigh*2))==0 && i!=0){
            doc.addPage();
        }

        doc.image('../../dist/pdf/emojis/'+emoji.name+'.png', x, y, {width: layout.emojiSize});
        doc.fontSize(14).text(emoji.code, x+layout.textLeftMargin, y);
        doc.fontSize(11).text(emoji.description, x+layout.textLeftMargin, y+layout.textDescTopMargin);

    }

    doc.end();
    console.log("Done generating PDF")
}