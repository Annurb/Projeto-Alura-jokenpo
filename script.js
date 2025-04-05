function jogar(){
    let id = document.createElement("input");
    id.type = "number";
    id.placeholder = "Digite sua idade";

    let idade = document.createElement("input");
    idade.type = "button";
    idade.value = "Ok";

    let div = document.getElementsByClassName("coisas");
    div[0].innerHTML = "<p>Antes de jogar, diga sua idade:</p>";
    div[0].appendChild(id);
    div[0].appendChild(idade);

    document.getElementById("jogar").disabled = true;

    idade.onclick = function() {
        if (id.value == "" || id.value < 1){
            alert("[ERRO] Idade não digitada ou inválida!");
        }
        else if (id.value < 18){
            alert("[ERRO] Você não tem idade suficiente para jogar!");
            document.getElementById("jogar").disabled = false;
        }
        else {
            // Início do jogo após idade confirmada
            let anos = document.createElement("input");
            anos.type = "number";

            let ok = document.createElement("input");
            ok.type = "button";
            ok.value = "Ok";

            div[0].innerHTML = "<p>Digite um número para jogar: 1 - pedra, 2 - papel, 3 - tesoura</p>";
            div[0].appendChild(anos);
            div[0].appendChild(ok);

            ok.onclick = function() {
                if (anos.value == "" || anos.value < 1 || anos.value > 3){
                    alert("[ERRO] Número não digitado ou inválido!");
                } else {
                    let computador = Math.floor(Math.random() * 3) + 1;
                    let escolha;

                    switch(computador){
                        case 1:
                            escolha = "pedra";
                            break;
                        case 2:
                            escolha = "papel";
                            break;
                        case 3:
                            escolha = "tesoura";
                            break;
                    }

                    div[0].innerHTML = `<p>O computador escolheu ${escolha}</p>`;

                    if (anos.value == computador) {
                        div[0].innerHTML += "Deu empate!!";
                    } else if (
                        (anos.value == 1 && computador == 2) ||
                        (anos.value == 2 && computador == 3) ||
                        (anos.value == 3 && computador == 1)
                    ) {
                        div[0].innerHTML += "Que pena, você perdeu!!";
                    } else {
                        div[0].innerHTML += "Parabéns, você ganhou!!";
                    }

                    document.getElementById("jogar").disabled = false;
                }
            }
        }
    }
}
