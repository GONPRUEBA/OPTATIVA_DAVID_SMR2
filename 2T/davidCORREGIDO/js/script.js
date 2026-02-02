// VERIFICAR POR CONSOLA BASICOS
const enlaces = document.getElementById('enlaces');
console.log(enlaces);
console.log(typeof enlaces);
console.log(enlaces.innerHTML);
console.log(enlaces.innerText);
console.log(enlaces.tagName);

const cajaImgBot = document.getElementsByClassName('cajaImgBot');
console.log(cajaImgBot);
console.log(cajaImgBot.length);
console.log(cajaImgBot[1]);

const link = document.getElementsByTagName('a');
console.log(link);
console.log(link[1].innerText);



const rojo = document.querySelector('.boton_rojo');
console.log(rojo);

const rojo2 = document.querySelectorAll('.boton_rojo');
console.log(rojo2);

// CAMBIANDO COSITAS VISUALES
const cuadroROJO = document.querySelectorAll('.imagen');
cuadroROJO[1].style.backgroundColor = 'red'
cuadroROJO[1].style.color = 'yellow'
cuadroROJO[1].style.textTransform = 'uppercase'

// const texto = document.getElementById('navegador');
// texto.innerText = 'jugando';
// texto.style.color = 'yellow';


// function cambiarTexto(){
    // texto.innerText = 'jugando';
    // texto.style.color = 'yellow';
// }

// ELIMINAR ATRIBUTO
// const eliminarATRIBUTO = document.getElementsByTagName('a');
// console.log(link[1].getAttribute('href')); 
// eliminarATRIBUTO[1].removeAttribute('href');

// AÑADIR ATRIBUTO
const añadirATRIBUTO = document.getElementsByTagName('a');
console.log(link[1].setAttribute('href','campusfp.es')); 
añadirATRIBUTO[1].setAttribute('href');