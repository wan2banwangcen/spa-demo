/* exported $dlgGoto */
var $dlgGoto = (function(){
    var $dlg = $(''
      +'<div class="notepad-replace-dlg">'
        +'<div class="dialogbox">'
          +'<div class="titlebar">'
            +'<p class="title">替换</p>'
            +'<span class="btn-close">✖</span>'
          +' </div>'
          +'<div class="main">'
            +'<label for="">查找内容(N):<input class="txt-search" autofocus><br></label>'
            +'<label>替换为(P):<input class="txt-replace"><br></label>'
            +'<label><input type="checkbox" value="capital-sense">区分大小写(C)</label>'
            +'<input class="btn-search btn" type="button" value="查找下一个(F)">'
            +'<input class="btn-replace btn" type="button" value="替换(R)">'
            +'<input class="btn-replace-all btn" type="button" value="全部替换(A)">'
            +'<input class="btn-cancel btn" type="button" value="取消">
          +'</div>'
        +'</div>'
      +'</div>');
    var $btnClose = $dlg.find('.btn-close');
    var $btnCancel = $dlg.find('.btn-cancel');
    var $titlebar = $dlg.find('.titlebar');
    var $btnGoto = $dlg.find('.btn-goto');
    var $txtLine = $dlg.find('.line-num');
    var cfg = {
      curLine:1,
      total:1,
      gotoHandler:null
    };

    function destory(){
      $dlg.remove();
    }
    
    function validation(){
      var num = Number($txtLine.val());
      if(num === 0 || num >cfg.total ){
        alert('行数超过总行数');
        return false;
      }
      return true;
    }
    function gotoHandler(){
      if(!validation()){
        return ;
      }
      cfg.gotoHandler($txtLine.val());
      destory();
    }

    function filieterKey(e){
      if(!/[0-9]/.test(e.key)){
        e.preventDefault();
        alert('不能输入数字以外的字符');
      }
    }

    var init = function(conf){
      $.extend(cfg,conf);
      $('body').append($dlg);
      $dlg.find('.dialogbox').draggable({handle: $titlebar});
      $txtLine.val(cfg.curLine);
      $txtLine.select();
      $btnClose.click(destory);
      $btnCancel.click(destory);
      $btnGoto.click(gotoHandler);
      $txtLine.keypress(filieterKey);
  };
  return {init:init};
}());
