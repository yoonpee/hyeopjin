$(document).ready(function(){
  // 하나의 버튼을 기준으로 여러 상황이 연출되어야 한다면 조건문에 의한 변수 연출이 필요.
  menu_bt = 0; //변수선언. 회전X
  $('.menubar').click(function(){
    if( menu_bt == 0 ) // 회전X
    {
    // 회전이 안된상태 이므로 회전이 되도록 하자.
    $('.menubar li:eq(0)').animate({'rotate':'45deg','top':'6px'},300)
    $('.menubar li:eq(1)').fadeOut();
    $('.menubar li:eq(2)').animate({'rotate':'-45deg','top':'6px'},300)
    $('.full_gnbwrap').fadeIn(600);
    $('.full_gnbbox').animate({'right':'0'},600);
    $('.menubar').css({'position':'fixed'});
    $('.menubar li').css({'background':'#666'});
    $('html, body').css({ 'overflow': 'hidden', 'height': '100%' }); 
    $('#element').on('scroll touchmove mousewheel', function(event) { 
      // 터치무브와 마우스휠 스크롤 방지     
      event.preventDefault();     
      event.stopPropagation();     
      return false; 
    });
    // 이제 회전이 되었으므로 해당변수의 값도 변경 메모하자.
    menu_bt = 1; // 회전O 상태
    }
    else if( menu_bt == 1 ){
    $('.menubar li:eq(0)').animate({'rotate':'0','top':'0'},300)
    $('.menubar li:eq(1)').fadeIn();
    $('.menubar li:eq(2)').animate({'rotate':'0','top':'20px'},300)
    
    $('.full_gnbwrap').fadeOut(600);
    $('.full_gnbbox').animate({'right':'-1000px'},600);

    $('.menubar').css({'position':'absolute'});
  
    menu_bt = 0; // 회전X 상태
    $('html, body').css({'overflow': 'auto', 'height': '100%'}); 
    $('#element').off('scroll touchmove mousewheel'); 
    }

  })
});

$(document).on('ready', function() {
  window.onscroll = function() {
    if ($(document).scrollTop() > 1) {
      $("#A_Header").addClass("header_scroll");
      $("#A_Header").mouseleave(function() {
        $(this).addClass('header_scroll');
      });
      
      // $('.menubar li').css({'background':'#666'});
    } else {
      $("#A_Header").removeClass("header_scroll");
      $("#A_Header").mouseleave(function() {
        $(this).removeClass('header_scroll');
      });
      
      // $('.menubar li').css({'background':'#fff'});
    }
  }

  $("#A_Header").mouseover(function() {
    $(this).addClass('header_scroll');
    
    // $('.menubar li').css({'background':'#fff'});

  });
  $("#A_Header").mouseleave(function() {
    if ($(document).scrollTop() < 1) {
      $(this).removeClass('header_scroll');
     
      // $('.menubar li').css({'background':'#666'});
    }
  });

});



  
  


//탑버튼
  $(".go_top").hide(); // 탑 버튼 숨김
  $(function () {

      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) { // 스크롤 내릴 표시
              $('.go_top').fadeIn();
          } else {
              $('.go_top').fadeOut();
          }
      });

      $('.go_top').click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 800);  // 탑 이동 스크롤 속도
          return false;
      });
  });