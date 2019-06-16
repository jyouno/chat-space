$(function(){
  $('.form__submit').removeAttr('data-disable-with disabled');
  
  function createMsg(data){
    function displyImg(data){
      if ( data.image != null ) {
        var img = `<img class="lower-message__image" src='${data.image}'>`
      } else {
        var img = "";
      }
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

  function scrollBottom() {
    $('.right-content__main').animate({
      scrollTop: $('.right-content__main')[0].scrollHeight
    }, 1500);
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    if ($('.form__message').val() == "" && $('.hidden').val() == "") {
      alert('メッセージを入力して下さい')
      return false
    } else {
    var formData = new FormData(this);
    var url = $(this).attr('action');
    }
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = createMsg(data);
      $('.right-content__main').append(html)
      scrollBottom()
      $('.new_message')[0].reset()
    })
    .fail(function(){
      alert('メッセージの送信に失敗しました');
    })
  });
});