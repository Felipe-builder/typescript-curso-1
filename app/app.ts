import { NegociacaoController } from './controllers/negociacao-controller.js';

const constroller = new NegociacaoController()
const form = document.querySelector('.form')
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    constroller.adiciona();
  });
} else {
  throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe')
}
