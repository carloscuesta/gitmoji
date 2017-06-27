'use strict';

const fs = require('fs');
const path = require('path');
const request = require('request');
const async = require('async');

const __root = path.join(__dirname, '/../../');

var emojiList = null;
var emojiUrls = null;

var loadEmojis = function(callback){

	if(emojiList==null)
		emojiList = JSON.parse(fs.readFileSync(__root+'src/data/gitmojis.json')).gitmojis;

	checkEmojis(function (err, emojisToDownload) {
		if(err) throw err;

		// Only send a request to Github, if some icons need to be downloaded
		if(emojisToDownload.length>0){
			fetchEmojiUrls(function () {
				downloadEmojis();
			});
		} else downloadEmojis();

		function downloadEmojis() {
			async.each(emojisToDownload, downloadEmoji, function (err) {
				if(err) throw err;
				callback(emojiList);
			});
		}

	});

	// Functions

	// Get emoji image urls, from Github
	function fetchEmojiUrls(callback) {
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
			callback();
		});
	}

	// Gets a list from gitmojis.json, of all the emoji icons to download.
	function checkEmojis(callback) {
		var emojisToDownload = [];

		async.each(emojiList, function (emoji, callback) {
			fs.access(__root+'dist/pdf/emojis/'+emoji.name+'.png', function (err) {
				// Returns an error, if image wasn't found
				if(err){
					emojisToDownload.push(emoji);
					callback(null);
				} else {
					console.log("Emoji found: "+emoji.name);
					callback(null);
				}
			});
		}, function (err) {
			callback(err, emojisToDownload);
		});
	}

	// Downloads an emoji from Github
	function downloadEmoji(emoji, callback) {
		console.log("Emoji downloading: "+emoji.name);

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
			emoji.path = path.resolve(__root+'dist/pdf/emojis/'+emoji.name+'.png');
			callback(null, emoji);
		}).pipe(fs.createWriteStream(__root+'dist/pdf/emojis/'+emoji.name+'.png'));
	}
};

module.exports = loadEmojis;
