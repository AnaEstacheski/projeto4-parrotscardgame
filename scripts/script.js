let jogo;
let relogio = 0;
let idInterval = 0;
start();
function start() {
    jogo = [];
    let cartas = prompt("Quantas cartas você quer no jogo?");
    while (cartas % 2 != 0 || cartas < 4 || cartas > 14) {
        cartas = prompt("Insira um número par entre 4 e 14")
    }
    const pares = cartas / 2;
    const tipos = [["./img/revertitparrot.gif"], ["./img/bobrossparrot.gif"], ["./img/explodyparrot.gif"], ["./img/fiestaparrot.gif"], ["./img/metalparrot.gif"], ["./img/tripletsparrot.gif"], ["./img/unicornparrot.gif"]];
    for (let i = 0; i < pares; i++) {
        jogo.push(tipos[i]);
        jogo.push(tipos[i]);
    }
    jogo.sort(() => { return Math.random() - 0.5 });
    for (let i = 0; i < jogo.length; i++) {
        const tabuleiro = document.querySelector(".tabuleiro");
        tabuleiro.innerHTML += `
    <div class="carta" onclick="viraCarta(this)>
        <div class="front">
            <img src="assets/img/icon-parrot.png" alt="Papagaio">
        </div>
        <div class="back hidden">
            <img src=${jogo[i]}>
        </div>
    </div>`
    }
}

timer(); {

}

let cliques = 0;
let primeira;
let segunda;
let duasViradas = false;
function viraCarta(elemento) {
    if (duasViradas === false) {
        if (elemento.querySelector(".back").classList.contains("hidden") === false){
            return;
        }
        if (cliques % 2 == 0) {
            primeira = elemento;
            primeira.querySelector(".front").classList.add("hidden");
            primeira.querySelector(".back").classList.remove("hidden");
            primeira.classList.add("giro");
            cliques++;
        } else {
            segunda = elemento;
            segunda.querySelector(".front").classList.add("hidden");
            segunda.querySelector(".back").classList.remove("hidden");
            segunda.classList.add("giro");
            if (primeira.innerHTML == segunda.innerHTML) {
                primeira = undefined;
                segunda = undefined;
            } else {
                duasViradas = true;
                setTimeout(() => {
                    primeira.querySelector(".back").classList.add("hidden");
                    primeira.querySelector(".front").classList.remove("hidden");
                    segunda.querySelector(".back").classList.add("hidden");
                    segunda.querySelector(".front").classList.remove("hidden");
                    primeira.classList.remove("giro");
                    segunda.classList.remove("giro");
                    duasViradas = false;
                }, 1300);
            }
            cliques++;
            console.log(cliques)
        }
    }

        if (document.querySelectorAll(".front.hidden").length == jogo.length) {
            setTimeout(() => {
                alert(`Você ganhou em ${cliques} jogadas!`);
            const restart = prompt("Você gostaria de jogar novamente? Digite 'SIM' ou 'NÃO'");
            if (restart == "SIM") {
                document.querySelector(".tabuleiro").innerHTML="";
                start();
            }
        }, 400);
        
    }
}