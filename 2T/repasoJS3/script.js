// -----------------------3.1----------------------------------
const cabecera = document.getElementById('cabecera');
console.log(cabecera);
console.log(typeof cabecera);
console.log(cabecera.innerHTML);
console.log(typeof cabecera.innerHTML);
console.log(cabecera.innerText);
console.log(cabecera.tagName);

const chip = document.getElementsByClassName('chip');
console.log(chip);
console.log(chip.length);
console.log(chip[1].innerText);

const lista = document.getElementsByTagName('li');
console.log(lista);
console.log(lista[3].innerText);

const chip2 = document.querySelector('.chip');
const chip3 = document.querySelector('.chip, toneamber');

const lista2 = document.querySelector('#menu li.tone-dark');
console.log(lista2)

const lista3 = document.querySelector('#menu li:not(tone-dark)');
console.log(lista3);

const chip4 = document.querySelectorAll('.chip');
console.log(chip4)

const chip5 = document.querySelectorAll('.chip, .tone-amber');
console.log(chip5)

const chip6 = document.querySelectorAll('.chip, .tone-amber');
console.log(chip6[1].innerText);

// -----------------------3.2----------------------------------
const estilo = document.getElementById('resultado');
estilo.style.backgroundColor = 'red'

const boton = document.getElementById('btnRun');
boton.style.backgroundColor = 'green'
boton.style.borderRadius = '10px'

const descripcion = document.getElementById('descripcion');
descripcion.innerText = 'opa'
descripcion.textContent = 'mamen'

const resultado = document.getElementById('resultado')
resultado.innerHTML = '<stromg>opa</strong>'

// -----------------------3.3----------------------------------

const enlace = document.getElementById('enlaceAyuda');


console.log(enlace.getAttribute('href'))

enlace.getAttribute('href')

enlace.removeAttribute('target')

enlace.setAttribute('href', 'opa.com')

enlace.setAttribute('title', 'josé')

// -----------------------3.4----------------------------------
const chip20 = document.querySelector('.chip');
console.log(chip20.classList)

console.log(chip20.classList.contains('tone-amber'))

chip20.classList.add('opa');

chip20.classList.remove('opa');

// -----------------------3.5----------------------------------
function crearElemento() {
    const zona = document.getElementById('zonaBuild');
    const nuevoDiv = document.createElement('div');
    zona.appendChild(nuevoDiv);
    nuevoDiv.textContent = 'OPA OPA'
}

function borrarElemento() {
    const opa1 = zonaBuild.lastElementChild;
    opa1.remove();
}

// -----------------------3.6----------------------------------
const lista20 = document.querySelector('#menu, li')
console.log(lista20)

console.log(lista20.childElementCount)

    console.log(lista20.children[2].previousElementSibling)

// -----------------------3.7----------------------------------
