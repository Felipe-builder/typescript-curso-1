import { Negociacao } from './negociacao.js';

export class Negociacoes {
  // private negociacoes: Array<Negociacao> = [];
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // lista(): ReadonlyArray<Negociacao> {
  //   return this.negociacoes;
  // }

  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}