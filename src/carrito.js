import dataProductos from "./data/productos";
const botonesAbrirCarrito=document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito=document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito=document.getElementById('carrito');
const btnAgregarCarrito=document.getElementById('agregar-al-carrito');
const producto=document.getElementById('producto');
const carrito=[];
const {productos}=dataProductos;
const formatoMoneda=new Intl.NumberFormat('ex-MX',{style:'currency',currency:'MXN'});





const renderCarrito=()=>{
    ventanaCarrito.classList.add('carrito--active')
    ventanaCarrito.querySelector('.carrito__body').innerHTML="";
    
    
    let suma=0;    

   carrito.forEach((productoCarrito)=>{

      let colorImagen;

      if(productoCarrito.color==="negro"){
         colorImagen="1.jpg"
      }
      else if(productoCarrito.color==="rojo"){
         colorImagen="rojo.jpg"
      }
      else if(productoCarrito.color==="amarillo"){
         colorImagen="amarillo.jpg"
      }
      
       
      suma+=productoCarrito.precio;
      

      const plantillaProducto=`
         <div class="carrito__producto">
							<div class="carrito__producto-info">
								<img src="./img/tennis/${colorImagen}" alt="" class="carrito__thumb" />
								<div>
									<p class="carrito__producto-nombre">
										<span class="carrito__producto-cantidad">${productoCarrito.cantidad} x </span>${productoCarrito.nombre}
									</p>
									<p class="carrito__producto-propiedades">
										Tamaño:<span>${productoCarrito.tamaño}</span> Color:<span>${productoCarrito.color}</span>
									</p>
								</div>
							</div>
							<div class="carrito__producto-contenedor-precio">
								<button class="carrito__btn-eliminar-item" data-accion="eliminar-item-carrito">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path
											d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
										/>
									</svg>
								</button>
								<p class="carrito__producto-precio">$${formatoMoneda.format(productoCarrito.precio)}</p>
							</div>
						</div>
      `;

      ventanaCarrito.querySelector('.carrito__body').innerHTML+=plantillaProducto;
      
   })
   ventanaCarrito.querySelector('.carrito__total').innerHTML=`$${formatoMoneda.format(suma)}`;

}



botonesAbrirCarrito.forEach((boton)=>{
    
   boton.addEventListener('click',(e)=>{
        renderCarrito();
   })
})

botonesCerrarCarrito.forEach((boton)=>{
    
    boton.addEventListener('click',(e)=>{
         ventanaCarrito.classList.remove('carrito--active');
    })
 })

 btnAgregarCarrito.addEventListener('click',(e)=>{

    const id=producto.dataset.productoId;
    const nombre=producto.querySelector('.producto__nombre').innerText;
    const cantidad=parseInt(producto.querySelector('#cantidad').value);
    const color=producto.querySelector('#propiedad-color input:checked').value;
    const tamaño=producto.querySelector('#propiedad-tamaño input:checked').value;
    
    const pro=productos.filter((producto)=>{
       
       if(producto.id===id){
          return producto
       }
     })
     const precio=pro[0].precio;
     let productoEnCarrito=false;


     if(carrito.length>0){
      carrito.forEach((producto)=>{
         if(producto.id===id&&producto.nombre===nombre&&producto.color===color&&producto.tamaño===tamaño){
            producto.cantidad+=cantidad;
            producto.precio+=(precio*cantidad);
            productoEnCarrito=true;
         }
      })
      if(!productoEnCarrito){
         carrito.push({
               id:id,
               nombre:nombre,
               cantidad:cantidad,
               color:color,
               tamaño:tamaño,
               precio:precio*cantidad
         
             });   
         }
   }
   else{
      carrito.push({
         id:id,
         nombre:nombre,
         cantidad:cantidad,
         color:color,
         tamaño:tamaño,
         precio:precio*cantidad
   
       });
   }

 })