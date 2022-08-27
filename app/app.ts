import { NegociacaoController } from './controllers/negociacao-controller.js';

const constroller = new NegociacaoController()
const form = document.querySelector('.form')
form.addEventListener('submit', event => {
  event.preventDefault();
  constroller.adiciona();
});
