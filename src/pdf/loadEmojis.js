'use strict';

const fs = require('fs');
const path = require('path');
const request = require('request');
const async = require('async');

var emojiList = null;
var emojiUrls = null;

var loadEmojis = function(callback){

    if(emojiList==null)
        emojiList = JSON.parse(fs.readFileSync('../data/gitmojis.json')).gitmojis;

    // Get emoji urls, from github
    var options = {
        url: 'https://api.github.com/emojis',
        headers: {
            'User-Agent': 'gitmoji'
        }
    };

    request(options, function (err, res, body) {
        if(err) throw err;
        if(res.statusCode!=200) throw new Error('Server responded with non 200 code');

        emojiUrls = JSON.parse(body);

        checkEmojis();
    });

    // Make sure all emojis from gitmojis.json, are downloaded from github
    function checkEmojis() {
        async.each(emojiList, function (emoji, callback) {
            fs.access('../../dist/pdf/emojis/'+emoji.name+'.png', function (err) {
                // Returns an error, if file wasn't found
                if(err){
                    // Download emoji
                    downloadEmoji(emoji, callback);
                    console.log("Emoji downloading: "+emoji.name);
                } else {
                    console.log("Emoji found: "+emoji.name);
                    callback(null);
                }
            });
        }, function (err) {
            // if one of the emojis doesn't exists
            if(err){
                console.log(err);
            }
            callback(emojiList);
        });
    }

    // Downloads an emoji from github
    function downloadEmoji(emoji, callback) {

        var url = emojiUrls[emoji.code.substring(1, emoji.code.length-1)];

        if(url==null){
            throw new Error('Emoji url not found, for emoji: '+emoji.code);
        }

        var options = {
            url: url,
            headers: {
                'User-Agent': 'gitmoji'
            }
        };

        request(options, function (err, res) {
            if(err) throw err;
            if(res.statusCode!=200) throw new Error('Server responded with non 200 code');
        }).on('end', function () {
            console.log("Emoji successfully downloaded: "+emoji.name);
            emoji.path = path.resolve('../../dist/pdf/emojis/'+emoji.name+'.png');
            callback(null, emoji);
        }).pipe(fs.createWriteStream('../../dist/pdf/emojis/'+emoji.name+'.png'));
    }
};

module.exports = loadEmojis;