$(document).ready(function(){
  $('.slider').slick({
    arrows:true,
    dots:false,
    adaptiveHeight:false,
    slidesToShow:4,
    slidesToScroll:1,
    speed:300,
    easing:'ease',
    infinite:true,
    initialSlide:0,
    autoplay:false,
    draggable:false,
    swipe:true,
    touchTreshhold:8,
    touchMove:true,
    waitForAnimate:true,
    centerMode:false,
    variableWidth:false,
    rows:1,
    
  });
});













































/*
const animItems = document.querySelectorAll('_anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            }else{
                animItem.classList.remove('active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop,
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 400);
}    */    /*
var isScrolling = false;
 
    window.addEventListener("scroll", throttleScroll, false);
 
    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }
 
    document.addEventListener("DOMContentLoaded", scrolling, false);
 
    var listItems = document.querySelectorAll("_anim-items");
 
    function scrolling(e) {
 /*
      if (isPartiallyVisible(firstBox)) {
        firstBox.classList.add("_active");
 
        document.body.classList.add("colorOne");
        document.body.classList.remove("colorTwo");
      } else {
        document.body.classList.remove("colorOne");
        document.body.classList.remove("colorTwo");
      }
 
      if (isFullyVisible(secondBox)) {
        secondBox.classList.add("_active");
 
        document.body.classList.add("colorTwo");
        document.body.classList.remove("colorOne");
      }
 */

      /*
      for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
 
        if (isPartiallyVisible(listItem)) {
          listItem.classList.add("_active");
        } else {
          listItem.classList.remove("_active");
        }
      }
    }
 
    function isPartiallyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
      var height = elementBoundary.height;
 
      return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }
 
    function isFullyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
 
      return ((top >= 0) && (bottom <= window.innerHeight));
    }*/
