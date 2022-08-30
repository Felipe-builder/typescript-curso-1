import { NegocicacoesView } from './../views/negociacoes-view.js';
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from '../views/mensagem-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negocicacoesView = new NegocicacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negocicacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.eDiaUtil(negociacao.data)) {
            this.mensagemView
                .update("Somente fazemos negociações em dias úteis. Obrigado");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    eDiaUtil(date) {
        return date.getDay() > DiasDaSemana.DOMINGO && date.getDay() < DiasDaSemana.SABADO;
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negocicacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
}
