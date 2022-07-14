const voyageMain = document.querySelector('.voyageMain');
const menu_btn = document.querySelector('.hamburgerMenu');
const mobile_menu = document.querySelector('.menuMain');
const menu_img = document.querySelector('.menuImg');
const close_img = document.querySelector('.closeImg');


const firstcard = document.querySelector('.card1Section')
const secondcard = document.querySelector('.card2Section')
const thirdcard = document.querySelector('.card3Section')
const fourthcard = document.querySelector('.card4Section')


const popupOne = document.querySelector('.popupOne')
const popupTwo = document.querySelector('.popupTwo')
const popupThree = document.querySelector('.popupThree')
const popupFour = document.querySelector('.popupFour')



const topcards = document.querySelector('.voyageTopCards')
const bottomcards = document.querySelector('.voyageBottomCards')

const popupOne_closeBtn = document.querySelector('.popupOneCancelButton')
const popupTwo_closeBtn = document.querySelector('.popupTwoCancelButton')
const popupThree_closeBtn = document.querySelector('.popupThreeCancelButton')
const popupFour_closeBtn = document.querySelector('.popupFourCancelButton')





function myFunction() {
    voyageMain.classList.toggle('is-not-active');
    mobile_menu.classList.toggle('is-active');
    menu_img.classList.toggle('is-not-active');
    close_img.classList.toggle('is-active');
}

function myFunction2() {
    voyageMain.classList.remove('is-not-active');
    mobile_menu.classList.remove('is-active');
    menu_img.classList.remove('is-not-active');
    close_img.classList.remove('is-active');
}

menu_btn.addEventListener('click', myFunction);
const MediaQuery1 = matchMedia(' (min-width: 951px) ');
MediaQuery1.addEventListener("change", myFunction2);



function openPopupOne() {
    popupOne.classList.toggle('is-active');
    topcards.classList.toggle('is-not-active');
    bottomcards.classList.toggle('is-not-active');
    window.scrollTo({ top: 100, behavior: 'smooth' });

}
firstcard.addEventListener('click', openPopupOne);

function closePopupOne() {
    popupOne.classList.toggle('is-active');
    topcards.classList.toggle('is-not-active');
    bottomcards.classList.toggle('is-not-active');
}
popupOne_closeBtn.addEventListener('click', closePopupOne);




function openPopupTwo() {
    popupTwo.classList.toggle('is-active');
    topcards.classList.toggle('is-not-active');
    bottomcards.classList.toggle('is-not-active');
    window.scrollTo({ top: 100, behavior: 'smooth' });

}
secondcard.addEventListener('click', openPopupTwo);


function closePopupTwo() {
    popupTwo.classList.toggle('is-active');
    topcards.classList.toggle('is-not-active');
    bottomcards.classList.toggle('is-not-active');

}
popupTwo_closeBtn.addEventListener('click', closePopupTwo);





function openPopupThree() {
    popupThree.classList.toggle('is-active');
    topcards.classList.toggle('is-not-active');
    bottomcards.classList.toggle('is-not-active');
    window.scrollTo({ top: 100, behavior: 'smooth' });
}
thirdcard.addEventListener('click', openPopupThree);


function closePopupThree() {
    popupThree.classList.toggle('is-active');
    topcards.classList.toggle('is-not-active');
    bottomcards.classList.toggle('is-not-active');
}
popupThree_closeBtn.addEventListener('click', closePopupThree);






function openPopupFour() {
    popupFour.classList.toggle('is-active');
    topcards.classList.toggle('is-not-active');
    bottomcards.classList.toggle('is-not-active');
    window.scrollTo({ top: 100, behavior: 'smooth' });

}
fourthcard.addEventListener('click', openPopupFour);


function closePopupFour() {
    popupFour.classList.toggle('is-active');
    topcards.classList.toggle('is-not-active');
    bottomcards.classList.toggle('is-not-active');
}
popupFour_closeBtn.addEventListener('click', closePopupFour);