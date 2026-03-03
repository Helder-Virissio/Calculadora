import {soma} from "./Somar.js";

import {mult} from "./Multiplicar.js";

import {subtrair} from "./Subtrair.js";

import {divisao} from "./Divisão.js";

const display = document.getElementById("display");

function append(valor) {
    display.value += valor;
}

function ApagarTela() {
    display.value = "";
}

function del(){
    display.value = display.value.slice(0,-1);
}

function calculate() {
    let expressao = display.value;

    let operador = expressao.match(/[+\-*/]/)[0];
    let partes = expressao.split(operador);

    let n1 = Number(partes[0]);
    let n2 = Number(partes[1]);

    let resultado;

    if (operador === '+') {
        resultado = soma(n1, n2);
    } else if ( operador === '-') {
        resultado = subtrair(n1, n2);
    } else if (operador === '*') {
        resultado = mult(n1, n2);
    } else if (operador === '/') {
        resultado = divisao(n1, n2)
    }

    display.value = resultado;

}

window.append = append;
window.ApagarTela = ApagarTela;
window.del = del;
window.calculate = calculate;





