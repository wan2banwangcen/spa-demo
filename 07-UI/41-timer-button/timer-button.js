/* export $timerBtn */
var $timerBtn = (function(){
     var cfg = {
      container:'.main',
      title:'确定',
      time:9,
      enabled:false,
      clickHandler:null
    };

    var n = cfg.time;
  var init = function(conf){
    $.extend(cfg,conf);
    var $container = $(cfg.container);
    /*
    var $timerBtn = $('<input type="button" value="同意(6s)" disabled>');
    $timerBtn.appendTo($container);
    $container.append($timerBtn);*/
    var DOM = '<input class="timer-button" type="button" value="'+ cfg.title + '('+ n + 's)" disabled> ';
    $container.html(DOM);
    var $btnAgree = $container.find('.timer-button');
    //css内部样式
    /*$btnAgree.css({
    'font-size':'1.2em',
    'height':'60px',
    'width':'200px'
    });*/
    var timer=window.setInterval(function(){
      n--;
      if(n == 0){
        window.clearInterval(timer);
        $btnAgree.removeAttr('disabled');
        $btnAgree.val(cfg.title);
      } else{
        $btnAgree.val(cfg.title +' (' + n + 's)');
      }
    },1000);
    $btnAgree.click(function(){
      //$btnAgree.trigger('timer-button-click');
      cfg.clickHandler();
      
    });
    return $btnAgree;
  };

  var remove = function(){
    var $btn = $('.main').find('.timer-button');
    $btn.remove();
  };
  return {init:init,remove:remove};
}());

function TimerButton(conf){
  var cfg = {
    container:'.main',
    title:'确定',
    time:9,
    enabled:false,
    clickHandler:null
  };
  var n = cfg.time;
  this.init = function(conf){
    $.extend(cfg,conf);
    var $container = $(cfg.container);
    var DOM = '<input class="timer-button" type="button" value="'+ cfg.title + '('+ n + 's)" disabled> ';
    $container.html(DOM);
    var $btnAgree = $container.find('.timer-button');
    var timer=window.setInterval(function(){
      n--;
      if(n == 0){
        window.clearInterval(timer);
        $btnAgree.removeAttr('disabled');
        $btnAgree.val(cfg.title);
      } else{
        $btnAgree.val(cfg.title +' (' + n + 's)');
      }
    },1000);
    $btnAgree.click(function(){
      cfg.clickHandler();
    });
    return $btnAgree;
  };
}

