const tazasData = [
    {
        nombre: 'TAZON PERSONAJES V1',
        precio: 20,
        id: 1,
        img: './img/tazas/tazas_personajes2.jpg'
    },
    {
        nombre: 'TAZAZ MARIPOSAS',
        precio: 40,
        id: 2,
        img: './img/tazas/tazas_mariposa.jpeg'
    },
    {
        nombre: 'TAZON PERSONAJES V2',
        precio: 30,
        id: 3,
        img: './img/tazas/tazas_personajes.jpeg'
    },
    {
        nombre: 'TAZON ROSA ORO',
        precio: 20,
        id: 4,
        img: './img/tazas/taza_rosa_oro.jpeg'
    },
    {
        nombre: 'TAZON PERSONAJES V3',
        precio: 50,
        id: 5,
        img: './img/tazas/tazas_personaes3.jpeg'
    },
    {
        nombre: 'TAZON PERSONAJES MARVEL',
        precio: 40,
        id: 6,
        img: './img/tazas/tazas_marvel.jpeg'
    },
    {
        nombre: 'TAZON MODELO MESSI',
        precio: 100,
        id: 7,
        img: './img/tazas/taza_mesi.jpeg'
    },
    {
        nombre: 'TAZAS TIKTOK',
        precio: 80,
        id: 8,
        img: './img/tazas/tazas_tiktok.jpg'
    }
]


const btnImgCarrito = document.querySelector('#imgCarrito');
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#table-carrito tbody');
const variarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

let  tazasCarrito = [];

cargarEventListeners();

function cargarEventListeners(){
    // Abrir y cerrar carrito
    btnImgCarrito.addEventListener('click', mostrarOculatarMenuCarrito);

    // Agregando producto
    listaCursos.addEventListener('click', agregarItem);
}


// FUNCIONES

function mostrarOculatarMenuCarrito() {
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
    // console.log(infoItem);


    const existe =  tazasCarrito.some( taza => taza.id === infoItem.id );
    // console.log(existe);

    if (existe) {
        const tazas = tazasCarrito.map( taza => {
            if ( taza.id === infoItem.id) {
                taza.cantidad++;
                return taza;
            } else {
                return taza;
            }
        });
        tazasCarrito = [ ...tazas];
    } else{
        tazasCarrito = [ ...tazasCarrito, infoItem ]
    }

    // tazasCarrito = [ ...tazasCarrito, infoItem ]
    // console.log(tazasCarrito);

    pintarHtml();
}


function pintarHtml() {
    limpiarHTML();
    tazasCarrito.forEach ( taza => {
        const { imagen, nombreItem, precio, cantidad } = taza;
        // console.log(precioTotal);
        const row = document.createElement('tr');
        // row.classList.add("mt-4");
        row.innerHTML = `
            <td class="flex justify-center"> <img src="${imagen}" style="height: 80px;" >  </td>
            <td class="text-center"> ${nombreItem} </td>
            <td class="text-center"> ${precio} </td>
            <td class="text-center"> ${cantidad} </td>
            <td class="text-center"> ${precioTotal} </td>
        `;
        contenedorCarrito.appendChild(row);
    })

}

function limpiarHTML(){
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

const tazasCardItems = tazasData.map( (taza, index) => {
    return `<div class="flex justify-center border-2 shadow-lg bg-orange-100 rounded-xl m-6 lg:mx-0 transition ease-in-out duration-300 hover:scale-105" key="${index}">
                <div class="p-4">
                    <img class="w-full" src="${taza.img}">
                    <div class="mt-3">
                        <h3 class="uppercase text-center font-bold text-lg">${taza.nombre}</h3>
                        <div class="flex justify-center mt-3">
                            <h4 class="text-base text-orange-600 font-bold">
                            <span> Desde: S/. </span> <span class="text-cyan-600 font-bold text-lg"> ${taza.precio}</span>
                            </h4>
                            <div class="ml-2">
                                <img class="w-6 cursor-pointer agregar-curso" src="./img/carrito-de-compras.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
});

listaCursos.innerHTML = tazasCardItems.join("");

