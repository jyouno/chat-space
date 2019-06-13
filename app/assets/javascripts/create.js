$(function(){
  function createMsg(data){
    function displyImg(data){
      if ( data.image != null ) {
        var img = `<img class="lower-message__image" src='${data.image}'>`
      } else {
        var img = "";
      }
      return img
    }

    var html = `<div class="right-content__main__message">
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

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
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
      $(function(){
        $('.right-content__main').animate({
          scrollTop: $('.last').offset().top
        }, 1500);
      })
    })
    .fail(function(){

    })
  })
});