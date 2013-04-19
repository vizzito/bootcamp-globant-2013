function getTweet(){

  $.ajax({
          url: 'http://search.twitter.com/search.json',
          type: 'GET',
          dataType: 'json',
          data: { q: 'html5' },  
          context: document.body,
          success: function(data) {
             var $list = $('#tweets');             
             $list.addClass('tweet');
             $list.prepend('<h1>Tweets:</h1><hr>');
             var tweets = data.results;
             var tweet;
             tweets.forEach(function(entry) {
                tweet='<ul>';
                tweet+='<li>'+entry.from_user+'</li>';
                tweet+='<li>'+entry.text+'</li>';
                tweet+='<li>'+entry.created_at+'</li>';
                tweet+="<li>Profile image url: <img src='" + entry.profile_image_url + "'/></li>";
                tweet+='</ul><hr>';
                $list.append(tweet);
             });
          },
          error: function (xhr, ajaxOptions, thrownError) {
            console.log('error');
          }});
}
