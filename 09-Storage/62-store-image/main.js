$(function(){
  var $url = $('input[type="url"]');
  var $btnStore = $('input[type="button"]');
  var $img = $('img');
  var $tmpImg = $('<img>');

  $tmpImg.attr('crossOrigin','anonymous');

  var imgURL = localStorage.getItem('url');
  showImg(imgURL);
  $btnStore.click(function(){
    var url = $url.val();
    if(url === '') return;
    $tmpImg.attr('src',url);
    $url.val('');
    showImg(url);
  });

  $tmpImg.load(function(){
    var can = $('<canvas>').get(0);
    var ctx = can.getContext('2d');
    can.width = this.width;
    can.height = this.height;
    ctx.drawImage(this,0,0,can.width,can.height);
    var data = can.toDataURL();
    localStorage.setItem('url',data);
    showImg(data);

  })

  function showImg(url){
    $img.attr('src',url);
    $img.css({'display':'block'});
  }
});
