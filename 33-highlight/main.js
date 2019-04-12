/* global hljs: true*/
$(function(){
  var $btnAddCode = $('input[type = "button"]');
  $btnAddCode.click(function(){
    var $code = $('<div><pre class="javascript"></pre><button>删除</button></div>');
    $code.find('pre').html($('.code').val());
    $('div.main').append($code);
    hljs.highlightBlock($code.find('pre').get(0));
  });
});
