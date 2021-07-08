const toggle = document.querySelector(".go_lang");
const lang = document.querySelector(".korean");
const btn = document.querySelector(".btnCall");
const menu = document.querySelector(".menuMo");
const close = document.querySelector(".close");
const open = document.querySelector(".open");

// lang.addEventListener("mouseover", ()=>{
//     toggle.classList.add("on")
// })
// lang.addEventListener("mouseout", ()=>{
//     toggle.classList.remove("on")
// })
btn.addEventListener("click", ()=>{
    menu.classList.toggle("on")
    close.classList.toggle("on");
    open.classList.toggle("on");
}) 
$(".korean").click(function(){
    $(".go_lang ").slideToggle();
  });
window.onscroll = function() {scrollFunction()};
