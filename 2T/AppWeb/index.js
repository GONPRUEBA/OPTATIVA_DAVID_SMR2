const opa1 = document.getElementById('card-text-3');
console.log(opa1);
console.log(typeof opa1);
console.log(opa1.innerText);
console.log(opa1.tagName);

const opa2 = document.getElementsByClassName('card__text');
console.log(opa2);
console.log(opa2.length);
console.log(opa2[1].innerText);

const opa3 = document.getElementsByTagName('button');
console.log(opa3.length);
console.log(opa3[2].getAttribute('type'));

const opa4 = document.querySelector('#mid-left-p');
console.log(opa4.innerText);
console.log(opa4.textContent);

const opa5 = document.getElementById('card-4');
console.log(opa5.classList.contains('card'));

const opa6 = document.getElementById('btn-buy-4');
console.log(opa6.parentElement);
console.log(opa6.parentElement.id);

const opa7 = document.getElementById('btn-buy-5');

opa7.addEventListener('click'), function(){
    console.log(opa7.getAttribute('e.target'));
    console.log(opa7.innerText);
}