const contenedorTabs=document.querySelector('.tabs');
const botones=document.querySelectorAll('.tabs__button');
const pestañas=document.querySelectorAll('.tab');



contenedorTabs.addEventListener('click',(e)=>{
    
    const tabEnlace=e.target.dataset.tab;
    
    
    if(e.target.closest('button')){
        if(tabEnlace==="caracteristicas"){
            e.target.classList.add('tabs__button--active');
            document.getElementById('caracteristicas').classList.add('tab--active');


            botones[1].classList.remove('tabs__button--active');
            botones[2].classList.remove('tabs__button--active');

            pestañas[1].classList.remove('tab--active')
            pestañas[2].classList.remove('tab--active')
        }
        else if(tabEnlace==="reseñas"){
            e.target.classList.add('tabs__button--active');
            document.getElementById('reseñas').classList.add('tab--active');

            botones[0].classList.remove('tabs__button--active');
            botones[2].classList.remove('tabs__button--active');

            pestañas[0].classList.remove('tab--active')
            pestañas[2].classList.remove('tab--active')
        }
        else if(tabEnlace==="envio"){
            e.target.classList.add('tabs__button--active');
            document.getElementById('envio').classList.add('tab--active');

            botones[0].classList.remove('tabs__button--active');
            botones[1].classList.remove('tabs__button--active');

            pestañas[0].classList.remove('tab--active')
            pestañas[1].classList.remove('tab--active')
        }
    }
   
})