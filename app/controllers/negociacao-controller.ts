import { NegocicacoesView } from './../views/negociacoes-view.js';
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from '../views/mensagem-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';

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


  public adiciona(): void {
    const negociacao: Negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    if (!this.eDiaUtil(negociacao.data)) {
      this.mensagemView
        .update("Somente fazemos negociações em dias úteis. Obrigado");
      return;
    } 

    this.negociacoes.adiciona(negociacao);
    this.limparFormulario();
    this.atualizaView();
  }

  private eDiaUtil(date: Date) {
    return date.getDay() > DiasDaSemana.DOMINGO && date.getDay() < DiasDaSemana.SABADO;
  }

  private limparFormulario(): void {
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