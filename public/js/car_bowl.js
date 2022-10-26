
const btnImgCarrito = document.querySelector('#imgCarrito');
const carrito = document.querySelector('#carrito');
const contenerdorCarrito = document.querySelector('#table-carrito tbody');
const variarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');





cargarEventListeners();

function cargarEventListeners(){
    // Abrir y cerrar carrito
    btnImgCarrito.addEventListener('click', mostrarOculatarMenuCarrito);

    // Agregando producto
    listaCursos.addEventListener('click', agregarItem);

}


// FUNCIONES

function mostrarOculatarMenuCarrito() {
    // console.log('clic');

    if( carrito.classList.contains('right-full') ) {
        carrito.classList.remove('right-full');
        carrito.classList.add('right-0');
    } else  {
        carrito.classList.remove('right-0');
        carrito.classList.add('right-full');
    } 
}


function agregarItem(e){
    // console.log(e.target);
    if (e.target.classList.contains('agregar-curso')) {
        // console.log('agregandoo');
        // console.log(e.target.parentElement.parentElement.parentElement.parentElement);
        const itemSeleccionado = e.target.parentElement.parentElement.parentElement.parentElement;
        // console.log(itemSeleccionado);
        leerDatosItem(itemSeleccionado)
    }
}

function leerDatosItem(item) {
    // console.log(item);

    // objeto de item
    const infoItem = {
        imagen: item.querySelector('img').src,
        nombreItem: item.querySelector('h3').textContent,
        precio: item.querySelector('span').textContent,
        id: item.querySelector('.id').getAttribute('data-id'),
        cantidad: 1,
    }

    console.log(infoItem);
}