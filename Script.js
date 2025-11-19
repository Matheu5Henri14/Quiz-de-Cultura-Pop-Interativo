document.getElementById("botao").addEventListener("click", function () {

    let pontos = 0;
    let total = 10;

    const respostasCorretas = {
        q1: "0",
        q2: "3",
        q3: "7",
        q4: "10",
        q5: "14",
        q6: "16",
        q7: "19",
        q8: "21",
        q9: "25",
        q10: "29"
    };

    const perguntas = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];

    let todasRespondidas = true;

    perguntas.forEach((q) => {
        const selecionada = document.querySelector(`input[name="${q}"]:checked`);

        if (!selecionada) {
            todasRespondidas = false;
            return;
        }

        const label = selecionada.nextElementSibling;

        if (selecionada.value === respostasCorretas[q]) {
            pontos++;
            label.classList.add("text-success", "fw-bold");
        } else {
            label.classList.add("text-danger", "fw-bold");
        }
    });

    // Validação: todas as perguntas respondidas?
    if (!todasRespondidas) {
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.className = "alert alert-warning";
        resultadoDiv.innerHTML = "Atenção! Responda todas as perguntas antes de enviar.";
        resultadoDiv.classList.remove("d-none");
        return;
    }

    // ✔️ REDIRECIONAR PARA A PÁGINA DE RESULTADO COM A PONTUAÇÃO
    window.location.href = `resultado.html?score=${pontos}&total=${total}`;
});
