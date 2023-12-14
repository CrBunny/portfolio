document.addEventListener("DOMContentLoaded", setTimeout);
document.body.style.cssText = 'overflow: hidden';
setTimeout(() => {
    let modal = document.querySelectorAll('.modal-active');
    let loader = document.querySelectorAll('.rainbow-marker-loader');
    document.body.style.cssText = '';
    for (let i = 0; i < modal.length; i++) {
    modal[i].classList.remove('modal-active');} 
    for (let j = 0; j < loader.length; j++) {
        loader[j].classList.remove('rainbow-marker-loader');} 
   }, 5010);

    //header animation 
    setTimeout(() => {
    let header = document.getElementsByTagName('header');
    for (let i = 0; i < header.length; i++) {
    header[i].classList.add('add');}
   }, 5020);

  
//burger menu
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('nav');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
})



//scroll animation

const elements = document.querySelectorAll('.post');

const checkElements = () => {
  const trigger = (window.innerHeight / 5) * 4;
  for (const element of elements){
    const topOfElement = element.getBoundingClientRect().top;
    if (topOfElement < trigger){
      element.classList.add('show');  // Используйте 'element', а не 'elements'
    }
  }
};
checkElements();

window.addEventListener('scroll',checkElements);
