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





