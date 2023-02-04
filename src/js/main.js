const button = document.querySelector('.menubutton');
const nav = document.querySelector('.nav');


button.addEventListener('click', ()=>{
    nav.classList.toggle('activo');
})