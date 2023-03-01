/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

const createTweetElement = function(obj) {

  const $tweet = $(`<article class="tweet">
    <header>
      <div class="left-header">
        <img src=${obj.user.avatars}>
          <p>${obj.user.name}</p>
      </div>
      <div class="right-header"><p>${obj.user.handle}</p></div>
    </header>
    <p class="display-tweet">${obj.content.text}</p>
    <footer>
      <div class="date"><strong>${obj.created_at}</strong></div>
      <div class="icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
    </article>`);
  return $tweet;
};

$(document).ready(function() {

  console.log("html loaded correctly!");

  const renderTweets = function(tweetsArr) {
    for (const element of tweetsArr)
  };

  const tweet = createTweetElement(tweetData);
  console.log(tweet); // to see what it looks like
  $('.tweet-container').append(tweet);
});


