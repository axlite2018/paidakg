/* этот код помечает картинки, для удобства разработки */
var lis = document.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
  lis[i].style.position = 'relative';
}

/* configuration */
var width = 370; // image width
var count = 1; // amount of images per slide

var carousel = document.getElementById('carousel');
var ul = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');

var position = 0; // текущий сдвиг влево

//Move images to the LEFT
carousel.querySelector('.prev').onclick = () => {
  position = Math.min(position + width * count, 0);
  ul.style.marginLeft = position + 'px';
  console.log(position);
};

//Move Images to the RIGHT
carousel.querySelector('.next').onclick = () => {
  position = Math.max(position - width * count, -width * (listElems.length - count));
  ul.style.marginLeft = position + 'px';
  console.log(position);
};

function slider(width__li, margin__right__li, col__view__img) {
  var step = width__li + margin__right__li;
  var slider__box__width = col__view__img * step - margin__right__li;
  var $col__img = $("#slider__box>ul>li").length;
  var col__main__left = 0;
  var max__col__main__left = $col__img * step;

  $("#slider__box").width(slider__box__width);

  $("#slider__box>ul>li").width(width__li).css("margin-right",margin__right__li);

  $("#left__nav").click(function(){
    if(-col__main__left == max__col__main__left - col__view__img * step){
      col__main__left = 0;
    } else{
      col__main__left = col__main__left - step;
    }
    $("#slider__box>ul").css("margin-left",col__main__left+"px");
  });

  $("#right__nav").click(function(){
    if(col__main__left == 0){
      col__main__left = -max__col__main__left + col__view__img * step;
    } else{
      col__main__left = col__main__left + step;
    }
    $("#slider__box>ul").css("margin-left",col__main__left+"px");
  });
}
$(slider(230,10,4));
