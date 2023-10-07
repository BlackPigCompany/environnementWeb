const burger = document.querySelector('.burger');
const navlink = document.querySelector(' nav ul');
const header = document.querySelector('header');



burger.addEventListener('click',()=> {
    navlink.classList.toggle('ul-active');

    burger.classList.toggle ('toggle');

})

header.addEventListener('click', ()=> {
    navlink.classList.remove('ul-active');
})