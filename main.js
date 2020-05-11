const navBurguer = document.querySelector('.nav-burguer');

navBurguer.addEventListener('click', (e)=>{
   navBurguer.classList.toggle('nav-burguer-on');
    document.querySelector('.nav-modal').classList.toggle('show-modal')
})
