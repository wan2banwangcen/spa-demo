$(function(){
  var $btn = $('input[type="button"]');
  var n = localStorage.getItem('n');
  if(!n) n = 0;
  //set button title
  setBtnTitle(n);
  $btn.click(function(){
    localStorage.setItem('n',++n);
    setBtnTitle(n);
  });

  function setBtnTitle(){
    $btn.val('被点击了'+ n +'次');
  }
});
