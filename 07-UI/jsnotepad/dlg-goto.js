/* exported $dlgGoto */
var $dlgGoto = (function(){
  var init = function(){
    var DOM=''
      +'<div class="notepad-goto-dlg">'
        +'<div class="dialogbox">'
          +'<div class="titlebar">'
            +'<p class="title">转到指定行</p>'
            +'<span class="btn-close">✖</span>'
          +'</div>'
          +'<div class="main">'
            +'<lable for="">行号(L):</lable><br>'
            +'<input class="line-num" type="text"><br>'
            +'<input class="btn-goto" type="button" value="转到">'
            +'<input class="btn-cancel" type="button" value="取消">'
          +'</div>'
      +'</div>';
    var $dlg = $(DOM);
    var $btnClose = $dlg.find('.btn-close');
    var $btnCancel = $dlg.find('.btn-cancel');
    $('body').append($dlg);
    $dlg.find('.dialogbox').draggable({handle: $dlg.find('.titlebar')});
    $btnClose.click(function(){$dlg.remove();});
    $btnCancel.click(function(){$dlg.remove();});
  };
  return {init:init};
}());
