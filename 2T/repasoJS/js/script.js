// ----------------------------3.1-----------------------------------
const nombre = document.getElementById("titulo");
console.log(nombre.innerText + ": 1");
console.log(nombre.nodeType + ": 2");
console.log(nombre.innerHTML + ": 3");
console.log(nombre.tagName + ": 4");

console.log('---------------------------------------')

const pieza = document.getElementsByClassName('pieza');
console.log(pieza + ": 5");
console.log(pieza.length + ": 6");
console.log(pieza[1].innerText + ": 7");

console.log('---------------------------------------')

const lista = document.getElementsByTagName('li');
console.log(lista + ": 8");
console.log(lista.length + ": 9");
console.log(lista[3].innerText + ": 10");

console.log('---------------------------------------')

const item = document.querySelector('.item');
const item2 = document.querySelector('.item.fondo-naranja');
console.log(item + ": 11");
console.log(item.innerText + ": 12");
console.log(item2.innerText + ": 13");

console.log('---------------------------------------')

const item3 = document.querySelectorAll('.item');
console.log(item3);
console.log(item3[0].innerText + ": 14");
console.log(item3[1].innerText + ": 15");
console.log(item3[2].innerText + ": 16");

// ----------------------------3.2-----------------------------------


console.log('--------------COLOR ROJO-------------------------')

const estado = document.getElementById('estado');
estado.style.color = 'red';

console.log('------------COLOR BOTON AZUL---------------------------') 

const boton = document.getElementById('btnAccion');
boton.style.backgroundColor = 'blue';
boton.style.borderRadius = '100px';
boton.style.padding = '10px 20px';

console.log('---------------------------------------')

const subtitulo = document.getElementById('subtitulo');
console.log(subtitulo.innerText);
console.log(subtitulo.textContent);
// TE LO SEPARA MAS

const listo = document.getElementById("estado");
listo.innerHTML = 'Estado: <span class="ok">LISTO</span>';

console.log('---------------------------------------')

// ----------------------------3.3-----------------------------------

const enlace = document.getElementById('linkDoc');
console.log(enlace.getAttribute('href'));
console.log(enlace.getAttribute('target'));
console.log(enlace.getAttribute('title'));

console.log('---------------------------------------')

const enlace2 = document.getElementById('linkDoc');
console.log(enlace2.removeAttribute('target'));
console.log(enlace.getAttribute('target'));

console.log('---------------------------------------')

const enlace3 = document.getElementById('linkDoc');
console.log(enlace3.setAttribute('title', 'opa opa'));

// ----------------------------3.4-----------------------------------

const accion = document.getElementById('btnAccion');
console.log(accion.classList);

if (accion.classList.contains('fondo-naranja')) {
    console.log('true')
} else {
    console.log('false')
}

accion.classList.add('fondo-naranja');
accion.classList.remove('fondo-naranja');
console.log(accion.classList);

// ----------------------------3.5------------ENTENDER EST YA-----------------------
function crearDiv() {
    const contenedor = document.getElementById('zonaNuevos');
    const nuevoDiv = document.createElement('div');
    const contador = contenedor.children.length + 1;

    nuevoDiv.className = 'crear1';
    nuevoDiv.innerText = `Nuevo estado ${contador}`;
    nuevoDiv.classList.add('pieza');
    contenedor.appendChild(nuevoDiv);
}

console.log('---------------------------------------')
function eliminarDiv() {
    const contenedor = document.getElementById('zonaNuevos');
    if (contenedor.children.length > 0) {
        const ultimoDiv = contenedor.lastChild;
        contenedor.removeChild(ultimoDiv);
    }
}   


// ----------------------------3.6-----------------------------------
const padre = document.getElementById('listaTareas').parentElement;
const hijos = document.getElementById('listaTareas').children;
console.log(padre.parentElement);
console.log(padre.childElementCount);

if (hijos.length > 0) {
    hijos[0].classList.add('seleccionada');
}


const lista2 = document.querySelectorAll('li');
lista2[1].previousElementSibling.classList.add('fondo-negro')
lista2[1].nextElementSibling.classList.add('fondo-negro')

// ----------------------------3.7-----------------------------------
