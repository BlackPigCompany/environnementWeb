const burger = document.querySelector('.burger');
const navlink = document.querySelector(' nav ul');

burger.addEventListener('click',()=> {
    navlink.classList.toggle('ul-active');
})