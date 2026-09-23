// Mensagem inicial

function mostrarMensagem() {

    const mensagem = document.getElementById("mensagem");

    mensagem.textContent =
        "Boa revisão! Comece pelo plano cartesiano e depois avance para as fórmulas.";

}


// Calculadora de distância entre dois pontos

function calcularDistancia() {

    // Pegando os valores dos inputs

    const x1 = Number(document.getElementById("x1").value);
    const y1 = Number(document.getElementById("y1").value);

    const x2 = Number(document.getElementById("x2").value);
    const y2 = Number(document.getElementById("y2").value);


    // Verificando se todos os campos foram preenchidos

    if (
        document.getElementById("x1").value === "" ||
        document.getElementById("y1").value === "" ||
        document.getElementById("x2").value === "" ||
        document.getElementById("y2").value === ""
    ) {

        document.getElementById("resultado").textContent =
            "⚠️ Preencha todos os campos.";

        return;
    }


    // Fórmula:
    // d = √[(x2-x1)² + (y2-y1)²]

    const distancia = Math.sqrt(
        Math.pow(x2 - x1, 2) +
        Math.pow(y2 - y1, 2)
    );


    // Mostrando o resultado

    document.getElementById("resultado").textContent =
        "📏 Distância entre os pontos: " +
        distancia.toFixed(2);

}
