
/*
 * GET home page.
 */


/*
 * GET home page.
 */
var util = require('util'),
    twitter = require('twitter');
var twit = new twitter({
    consumer_key: 'yOPD33Lyp76QNIHsMMajkw',
    consumer_secret: 'UApAIrH2K5zlRuKEB26zalXErKJVa7D1QY3jY3OFM7o',
    access_token_key: '12160492-34Bx3J7I8QhviIS9rEMPzYApTMzdxvoRNCrm9k0',
    access_token_secret: 'p8ZrVphIrX8Q4xUnuwOJjdcUsduRIlAIdpzH6DudSXc'
});

exports.index = function(req, res){
  twit.search('#DIY OR #Make OR #handmade OR #craft filter:links -filter:retweets', {result_type: 'recent', lang: 'en', count: 100},function(data) {
    res.render('index', {title: 'Mekuchi DIY Tracker', data: data.statuses});
  });
};