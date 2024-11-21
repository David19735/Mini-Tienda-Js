const producto=document.querySelector('.producto');
const productoImagen=producto.querySelector('.producto__imagen');
const thumbs=producto.querySelector('.producto__thumbs');
const contenedorColores=producto.querySelector('.producto__contenedor-radios');
const btnAumentar=producto.querySelector('#incrementar-cantidad');
const btnDisminuir=producto.querySelector('#disminuir-cantidad');
const inputCantidad=producto.querySelector('#cantidad');



thumbs.addEventListener('click',(e)=>{
    
    if(e.target.tagName==='IMG'){

        const imagenSrc=e.target.src;
        const lastIndex=imagenSrc.lastIndexOf('/')
        const nombreImagen=imagenSrc.substring(lastIndex +1);
        
       productoImagen.src=`./img/tennis/${nombreImagen}`

    }
})

contenedorColores.addEventListener('click',(e)=>{
    if(e.target.tagName==='INPUT'){
        const colorTenis=e.target.value;
        productoImagen.src=`./img/tennis/${colorTenis}.jpg`
    }
})


btnAumentar.addEventListener('click',(e)=>{

    if(Number(inputCantidad.value)<10){
        inputCantidad.value=Number(inputCantidad.value)+1;
    }
            
})

btnDisminuir.addEventListener('click',(e)=>{
    if(Number(inputCantidad.value)>1){
        inputCantidad.value=Number(inputCantidad.value)-1;
    }
})