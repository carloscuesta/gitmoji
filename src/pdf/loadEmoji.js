'use strict';

const fs = require('fs');
const path = require('path');
const request = require('request');

var emojiList = null;

var loadEmoji = function(emojiCode, callback){

    if(emojiList==null)
        emojiList = JSON.parse(fs.readFileSync('../data/gitmojis.json')).gitmojis;

    var emoji = null;

    for(var i = 0; i < emojiList.length; i++){
        if(emojiCode == emojiList[i].code){
            emoji = emojiList[i];
            emoji.unicode = emoji.entity.substring(3, 8);

            break;
        }
    }

    console.log(emoji.unicode);

    var options = {
        url: 'https://assets-cdn.github.com/images/icons/emoji/unicode/'+emoji.unicode+'.png?v6',
        headers: {
            'User-Agent': 'gitmoji'
        }
    };

    request(options, function (err, res) {
        if(err) throw err;
        if(res.statusCode!=200) throw new Error('Server responded with non 200 code');
    }).on('end', function () {
        emoji.path = path.resolve('../../dist/pdf/emojis/'+emoji.name+'.png');
        callback(null, emoji);
    }).pipe(fs.createWriteStream('../../dist/pdf/emojis/'+emoji.name+'.png'));
};

module.exports = loadEmoji;