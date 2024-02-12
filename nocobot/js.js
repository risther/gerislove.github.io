$(document).ready(function() {
    var $slider = $('.slider');
    var $sliderItems = $('.slider-item');
  
    var slideWidth = $sliderItems.first().outerWidth();
    var sliderWidth = slideWidth * $sliderItems.length;
  
    $slider.width(sliderWidth);
  
    function slideLeft() {
      $slider.animate({left: -slideWidth}, 500, function() {
        $slider.append($sliderItems.first());
        $slider.css('left', '');
      });
    }
  
    function slideRight() {
      $slider.prepend($sliderItems.last());
      $slider.css('left', -slideWidth);
      $slider.animate({left: 0}, 500);
    }
  
    $('.prev').click(function() {
      slideLeft();
    });
  
    $('.next').click(function() {
      slideRight();
    });
  });