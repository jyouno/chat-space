$(function(){

  function nameList(data){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${data.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${data.id}" data-user-name="${data.name}">追加</div>
                </div>`;
    return html
  }

  function noName(data){
    console.log(data)
    var html = `<div>${data}</div>`;
    return html
  }

  function memberList(id, name){
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                  <input name='group[user_ids][]' type='hidden' value='${id}'>
                  <p class='chat-group-user__name'>${name}</p>
                  <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                </div>`;
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

  $(document).on("click", '.user-search-add', function(){
    var id = $(this).data('userId');
    var name = $(this).data('userName');
    var html = memberList(id,name);
    $('#chat-group-users').append(html)
    $(this).parent('.chat-group-user').remove();
  })
  

});