import { NegocicacoesView } from './../views/negociacoes-view.js';
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from '../views/mensagem-view.js';

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes: Negociacoes = new Negociacoes();
  private negocicacoesView = new NegocicacoesView('#negociacoesView');
  private mensagemView = new MensagemView('#mensagemView')

  constructor(){
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
    this.negocicacoesView.update(this.negociacoes);
  }


  adiciona(): void {
    const negociacao: Negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);
    this.limparFormulario();
    this.atualizaView();
  }

  criaNegociacao(): Negociacao {
    const exp = /-/g;
    const date = new Date(this.inputData.value.replace(exp, ','));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
    return new Negociacao(date, quantidade, valor);
  }

  limparFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negocicacoesView.update(this.negociacoes);
    this.mensagemView.update('Negociação adicionada com sucesso');
  }
}