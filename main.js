const homeMain = document.querySelector('.homeMain');

const menu_btn = document.querySelector('.hamburgerMenu');
const mobile_menu = document.querySelector('.menuMain');
const menu_img = document.querySelector('.menuImg');
const close_img = document.querySelector('.closeImg');

function myFunction() {
    homeMain.classList.toggle('is-not-active');
    mobile_menu.classList.toggle('is-active');
    menu_img.classList.toggle('is-not-active');
    close_img.classList.toggle('is-active');
}

function myFunction2() {
    homeMain.classList.remove('is-not-active');
    mobile_menu.classList.remove('is-active');
    menu_img.classList.remove('is-not-active');
    close_img.classList.remove('is-active');


}


menu_btn.addEventListener('click', myFunction);
const MediaQuery1 = matchMedia(' (min-width: 951px) ');
MediaQuery1.addEventListener("change", myFunction2);


