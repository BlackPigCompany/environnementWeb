const img = document.getElementById('img');
img.addEventListener('load', ()=>{
    img.classList.add('imgOnLoad');
});

const animtxt = document.querySelector('span');
console.log(animtxt);

new Typewriter(animtxt, {
 loop: true,
 deleteSpeed: 20
 
})
.typeString('Salut !')
.pauseFor(800)
.deleteChars(7)
.typeString('Bienvenue sur mon site web')
.pauseFor(600)
.deleteChars(26)
.start();