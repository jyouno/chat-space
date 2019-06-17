$(window).bind("load", function(){
  if(document.URL.match("/groups" && "/messages")){

$(function(){
  function createLoadMsg(data){
    function displyImg(data){
      var img = data.image != null  ?  `<img class="lower-message__image" src='${data.image}'>` : "";
      return img
    }
    var html = `<div class="right-content__main__message" data-messageid='${data.messageid}'>
                <div class="right-content__main__message__user-name">
                ${data.user}
                </div>
                <div class="right-content__main__message__day">
                ${data.created_at}
                </div>
                <div class="right-content__main__message__coment">
                <p class="lower-message__content">
                ${data.content}
                </p>
                ${displyImg(data)}
                </div>
                </div>`
  return html
                }

  var reloadMessages = function() {
    var last_message_id = $('.right-content__main__message:last').data('messageid');
    var url = 'api/messages';
    $.ajax({
      url: url,
      type: 'GET',
      data: {id: last_message_id},
      dataType: 'json'
    })
    .done(function(datas){
      if (datas.length == 0) {
        return false;
      } else {
        datas.forEach(function(data){
          var insertHTML = createLoadMsg(data)
          $('.right-content__main').append(insertHTML)
          $('.right-content__main').animate({
            scrollTop: $('.right-content__main')[0].scrollHeight
          }, 1500);
        })
    }
    })
    .fail(function(){
      alert('自動更新失敗');
    });
  };
  setInterval(reloadMessages, 5000);
});
}
});