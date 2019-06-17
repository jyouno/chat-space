$(function(){

  function nameList(data){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${data.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="ユーザーのid" data-user-name="ユーザー名">追加</div>
                </div>`;
    return html
  }

  function noName(data){
    console.log(data)
    var html = `<div>${data}</div>`;
    return html
  }

  $('#user-search-field').on('keyup', function(){
    var input = $("#user-search-field").val();
    var url = '/users'
    if (input == "") {
      $('#user-search-result').empty();
      return false
    }
    $.ajax({
      url: url,
      type: 'GET',
      data: { keyword: input },
      dataTyoe: 'json'
    })
    .done(function(datas){
      $('#user-search-result').empty();
      datas.forEach(function(data){
        var html = nameList(data) 
        $('#user-search-result').append(html);
      })
    })
    .fail(function(){
      arelt('ユーザー検索に失敗しました');
    })

  })


});