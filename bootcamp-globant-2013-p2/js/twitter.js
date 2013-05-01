function getListTweets() {
  $("#button-tweets").click(function(e) {
    getTweetsService();
  });
}

function getInfoTweet(e) {
  var id = ($(this).attr('id')).split("_")[1];
  var img = '<img src="' + tweets[id].profile_image_url + '"></img>';
  var info =img+ '<p>Tweet:<br>' + tweets[id].text + '<br>User: <br>'+ tweets[id].from_user + '<br>Created at:<br>' + tweets[id].created_at + '</p>';
  $('#info-tweet').html(info);
};

function getTweetsService(){
  $.ajax({
    url: 'http://search.twitter.com/search.json',
    type: 'GET',
    dataType: 'json',
    data: { q: 'html5' },  
    context: document.body,
    success: function(data) {
      render(data);
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log('Issues loading Tweets');
    }
  });
}

function render(data) {
  var $list = $('#tweetsList');             
  tweets = data.results;
  var tweet;

  $list.on('click', 'li', getInfoTweet);
  for (var i = 0; i < tweets.length; i++) {
    tweet = '<li id="tweet_'+i+'"><a href="#dialog-tweet" data-rel="dialog" data-transition="pop">User: ' + tweets[i].from_user;
    tweet += '</a>Text: ' + tweets[i].text;
    tweet += '<img src="' + tweets[i].profile_image_url + '"title= "Profile_image_url: '+ tweets[i].profile_image_url+ '"></img></li>';
    $list.append(tweet);
  }
}