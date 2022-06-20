const cartas = prompt("Quantas cartas você quer no jogo?");
while (cartas % 2 != 0 || cartas < 4 || cartas > 14) {
    cartas = prompt("Insira um número par entre 4 e 14")
}
const pares = cartas / 2;
const jogo = [];
const tipos = [["./img/revertitparrot.gif"], ["./img/bobrossparrot.gif"], ["./img/explodyparrot.gif"], ["./img/fiestaparrot.gif"], ["./img/metalparrot.gif"], ["./img/tripletsparrot.gif"], ["./img/unicornparrot.gif"]];
for (let i = 0; i < pares; i++) {
    jogo.push(tipos[i]);
    jogo.push(tipos[i]);
}
jogo.sort(() => {return Math.random() - 0.5});

for (let i = 0; i < jogo.length; i++){
    const tabuleiro = document.querySelector(".tabuleiro");
    tabuleiro.innerHTML += `
    <div class="carta">
        <div class="carta">
            <img src="assets/img/icon-parrot.png" alt="Papagaio">
        </div>
        <div class="back hidden">
            <img src=${jogo[i]}>
        </div>
    </div>`
}