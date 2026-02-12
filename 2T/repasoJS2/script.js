// ----------------------3.1---------------------------------
// ----------------------1---------------------------------
const titulo = document.getElementById('titulo');
console.log(titulo.nodeValue);
console.log(titulo.nodeType);
console.log(titulo.innerHTML);
console.log(titulo.innerText);
console.log(titulo.tagName);
// ----------------------2---------------------------------
const pieza = document.getElementsByClassName('pieza');
console.log(pieza);
console.log(pieza.length);
console.log(pieza[1].innerText);
// ----------------------3--------------------------------
const li = document.getElementsByTagName('li');
console.log(li.length);
console.log(li[3].innerText);
// ----------------------4--------------------------------
const pieza2 = document.querySelector('.pieza');
const pieza3 = document.querySelector('.pieza,.fondo-naranja');
const pieza4 = document.querySelector('li.fondo-naranja');
console.log(pieza2);
console.log(pieza3);
console.log(pieza4);
// ----------------------5--------------------------------
const pieza5 = document.querySelector('li:not(.fondo-negro)');
console.log(pieza5);
// ----------------------6--------------------------------
const pieza6 = document.querySelectorAll('.pieza');
const pieza7 = document.querySelectorAll('.pieza,.fondo-naranja');
console.log(pieza6[1].innerText);
console.log(pieza7[0].innerText);

// ----------------------3.2---------------------------------
// ----------------------7--------------------------------
const style = document.getElementById('estado');
style.style.backgroundColor = 'red';
// ----------------------8--------------------------------
const style2 = document.getElementById('btnAccion');
style2.style.backgroundColor = 'yellow';
style2.style.borderRadius = '10px';
// ----------------------9--------------------------------
const texto = document.getElementById('subtitulo');
texto.innerText = 'opa';
// ----------------------10--------------------------------
const texto2 = document.getElementById('subtitulo');
texto.textContent = 'mamen';
// ----------------------11--------------------------------
const texto3 = document.getElementById('estado').innerHTML = '<p>ESPERANDO opa</p>';

// ----------------------3.3---------------------------------
// ----------------------12--------------------------------
const enlace = document.getElementsByTagName('a')[0];
console.log(enlace);
// ----------------------13--------------------------------

// ----------------------14--------------------------------
const enlace2 = document.getElementsByTagName('a')[0];
enlace2.removeAttribute('target');
// ----------------------15--------------------------------
enlace2.setAttribute('href', 'opa')
enlace2.setAttribute('title', 'opa')

// ----------------------3.4---------------------------------
// ----------------------16--------------------------------
const lista = document.getElementsByClassName('pieza');
console.log(lista[0].classList);
// ----------------------17--------------------------------
console.log(document.querySelector('.pieza').classList.contains('fondo-naranja'));
// ----------------------18--------------------------------
const opa = document.querySelector('.pieza').classList.add('opa');

// ----------------------3.5---------------------------------
// ----------------------20--------------------------------
function crear1() {
    const contenedor = document.getElementById('contenedorNuevos');
    const nuevo = document.createElement('div');
    nuevo.className = 'clase1';
    nuevo.textContent = 'Nuevo elemento';
    contenedor.appendChild(nuevo);
};
// ----------------------21--------------------------------
function eliminar1() {
    const ultimo = document.querySelector('#contenedorNuevos div:last-child');
    if (ultimo) ultimo.remove();
};

// ----------------------3.6---------------------------------
// ----------------------3.7---------------------------------



