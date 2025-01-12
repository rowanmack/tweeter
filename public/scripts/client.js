/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//function to inhibit xss:
const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function(obj) {
  const $newTweet = $(`<article class="tweet">
    <header>
      <div class="left-header">
        <img src=${obj.user.avatars}>
          <p>${obj.user.name}</p>
      </div>
      <div class="right-header"><p>${obj.user.handle}</p></div>
    </header>
    <p class="display-tweet">${escape(obj.content.text)}</p>
    <footer>
      <div class="date"><strong>${moment(obj.created_at).fromNow()}</strong></div>
      <div class="icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
    </article>`);
  return $newTweet;
};

const renderTweets = function(tweetsArr) {
  const tweetContainer = $('.tweet-container').empty();
  for (const element of tweetsArr) {
    const tweet = createTweetElement(element);
    tweetContainer.prepend(tweet);
  }
};

const resetForm = () => {
  $('#tweet-text').val("");
  $('.counter').val(140);
};

$(document).ready(function() {

  $("#error-message").hide();

  $("#tweet-form").submit(function(event) {
    event.preventDefault();
    tweetText = $("#tweet-text").val().length;

    //Error messages: will slidedown and appear for 1.5 seconds and then slide back up.
    //Assumes error was accidental, doesn't require user to submit a tweet if they accidentally hit submit button. 

    if (tweetText < 1) {
      $('#error-message').text("your tweet is empty").slideDown('slow').delay(1500).slideUp('slow');

    } else if (tweetText > 140) {
      $('#error-message').text("too many characters!").slideDown('slow').delay(1500).slideUp('slow');

    } else {
      $.ajax({
        url: "/tweets",
        type: "POST",
        data: $(this).serialize(),
      }).then((result) => {
        resetForm();
        loadTweets();
      });
    }
  });

  function loadTweets() {
    $.ajax({
      method: 'GET',
      url: '/tweets',
      success: (response) => {
        renderTweets(response);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  loadTweets();
});




