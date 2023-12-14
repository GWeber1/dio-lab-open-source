let vitorias = prompt("Vitorias: ");
let derrotas = prompt("Derrotas: ");

let resultado = parseInt(vitorias) - parseInt(derrotas);

let nivel;
if(resultado < 10) {
    nivel = "Ferro";
} else if(resultado > 10 && resultado <= 20) {
    nivel = "Bronze";
} else if(resultado > 20 && resultado <= 50) {
    nivel = "Prata";
} else if(resultado > 50 && resultado <= 80) {
    nivel = "Ouro";
} else if(resultado > 80 && resultado <= 90) {
    nivel = "Diamante";
} else if(resultado > 90 && resultado <= 100) {
    nivel = "Lendário";
} else if(resultado > 100) {
    nivel = "Imortal";
}

console.log("O herói tem de saldo de "+resultado+" está no nível de "+nivel);
