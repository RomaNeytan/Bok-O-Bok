@@include('jquery-3.5.1.min.js', {})

let burger = document.querySelector('#burger');
let headerMenu = document.querySelector('.header__nav');

burger.addEventListener("click" , function(event){
  event.preventDefault();
  burger.classList.toggle('active');
  headerMenu.classList.toggle('active');
})














