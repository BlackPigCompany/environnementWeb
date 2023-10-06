const hamburger = document.getElementById('hamburger');

const volet = document.querySelector('.volet');
console.log(hamburger);
console.log(volet);
hamburger.addEventListener('click', ()=> {
    volet.classList.toggle('volet-visible');
})


volet.addEventListener('click', ()=> {
    volet.classList.remove('volet-visible');
})