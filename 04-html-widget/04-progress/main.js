$(function(){
  var $progress = $('progress');
  var $start = $('.start');
  var $pause = $('.pause');
  var $reset = $('.reset');
  var timer =0;
  var n = 0;

  $start.click(function(){
    if(timer !== 0) return;
    timer = window.setInterval(function(){
      $progress.attr('value',n++);
    },100);
  });
  $pause.click(function(){
    window.clearInterval(timer);
    timer = 0;
    console.log(n);
  });
  $reset.click(function(){
    $progress.attr('value',n = 0);
    console.log(n);
  });
});
