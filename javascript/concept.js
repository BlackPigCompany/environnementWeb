const infos = document.querySelectorAll('.card');
const concepts = document.querySelectorAll('h4');


for (let i = 0; i < concepts.length; i++) {
        
    concepts[i].addEventListener('click', ()=>{
        infos[i].classList.toggle('card-visible')
    });
}
const animtxt = document.querySelector('.cursor');

new Typewriter(animtxt, {
 loop: true,
 deleteSpeed: 20
 
})

