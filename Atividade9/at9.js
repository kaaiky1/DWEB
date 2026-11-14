
function maiorNumero(a, b, c) {
    return Math.max(a, b, c);
}

function ordenarNumeros(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
}


function verificarPalindromo(str) {
    if (typeof str !== 'string') return false;
    const limpa = str.toLowerCase().replace(/\s+/g, '');
    const reverso = limpa.split('').reverse().join('');
    return limpa === reverso;
}

function verificarSubconjunto(palavraPrincipal, palavraBusca) {
    if (!palavraPrincipal || !palavraBusca || 
        typeof palavraPrincipal !== 'string' || typeof palavraBusca !== 'string' ||
        palavraPrincipal.trim() === "" || palavraBusca.trim() === "") {
        return "erro";
    }
    if (palavraPrincipal.includes(palavraBusca)) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}

function obterDiaDaSemana(dataInput) {
    const d = new Date(dataInput);
    if (isNaN(d.getTime())) {
        return "Data inválida";
    }
    const diasSemana = [
        "Segunda-feira", "Terça-feira", 
        "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"
    ];
    return diasSemana[d.getDay()];
}



function executarFuncao1() {
    let a = Number(document.getElementById('f1_a').value);
    let b = Number(document.getElementById('f1_b').value);
    let c = Number(document.getElementById('f1_c').value);
    let res = maiorNumero(a, b, c);
    document.getElementById('res1').innerText = "O maior número é: " + res;
}

function executarFuncao2() {
    let a = Number(document.getElementById('f2_a').value);
    let b = Number(document.getElementById('f2_b').value);
    let c = Number(document.getElementById('f2_c').value);
    let res = ordenarNumeros(a, b, c);
    document.getElementById('res2').innerText = "Ordem crescente: " + res.join(", ");
}

function executarFuncao3() {
    let str = document.getElementById('f3_str').value;
    let res = verificarPalindromo(str);
    let texto = res ? "É um palíndromo!" : "Não é um palíndromo.";
    document.getElementById('res3').innerText = texto;
}

function executarFuncao4() {
    let principal = document.getElementById('f4_principal').value;
    let busca = document.getElementById('f4_busca').value;
    let res = verificarSubconjunto(principal, busca);
    document.getElementById('res4').innerText = "Resultado: " + res;
}

function executarFuncao5() {
    let data = document.getElementById('f5_data').value;
    let res = obterDiaDaSemana(data);
    document.getElementById('res5').innerText = "Dia da semana: " + res;
}