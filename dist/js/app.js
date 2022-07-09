import { Negociacao } from "./models/negociacao.js";


const negocicacao = new Negociacao(new Date(), 10, 100);
console.log(negocicacao);
console.log(negocicacao.quantidade);
console.log(negocicacao.volume);