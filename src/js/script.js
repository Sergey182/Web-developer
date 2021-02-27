$(document).ready(function () {
    $('.burger-btn').on('click', function (e) {
        e.preventDefault();
        let headerNav = $('.header__nav');
        $('.burger-btn').toggleClass('burger-btn--active');
        headerNav.toggleClass('header__nav--active');
        headerNav.click(function () {
            $('.burger-btn').removeClass('burger-btn--active');
            $('.header__nav').removeClass('header__nav--active');
        });
    });

$("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});


let pic1 = document.querySelector('.header__content-pic1');
let pic2 = document.querySelector('.header__content-pic2');
let pic3 = document.querySelector('.header__content-pic3');
let pic4 = document.querySelector('.header__content-pic4');
let pic5 = document.querySelector('.header__content-pic5');
let pic6 = document.querySelector('.footer__content-pic1');
let pic7 = document.querySelector('.footer__content-pic2');

window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    pic1.style.transform = 'translate(-' + x * 35 + 'px, -' + y * 35 + 'px)';
    pic2.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    pic3.style.transform = 'translate(-' + x * 55 + 'px, -' + y * 55 + 'px)';
    pic4.style.transform = 'translate(-' + x * 75 + 'px, -' + y * 75 + 'px)';
    pic5.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
    pic6.style.transform = 'translate(-' + x * 75 + 'px, -' + y * 75 + 'px)';
    pic7.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
});
});


$(".skills").each(function(){ // Используем each (циклический метод)
  $(this).find(".skill-bar").animate({ // Создаём анимацию
    width: $(this).attr("data-percent") // Анимируем ширину
  },2000)
})


let inputs = document.querySelectorAll('.input__file');
    Array.prototype.forEach.call(inputs, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.input__file-button-text').innerText;
  
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
  
        if (countFiles)
          label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.input__file-button-text').innerText = labelVal;
      });
    });

    new WOW().init();


