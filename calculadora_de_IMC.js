function calcularIMC() {

    //Entrada
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let classificacaoEl = document.getElementById("classificacao");

    //Verificação
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById("resultado").textContent = "Por favor, insira valores válidos.";
        classificacaoEl.textContent = "";
        classificacaoEl.classList.remove("abaixo", "normal", "sobrepeso");
        return;
    }

    //Processamento
    let alturaMetros = altura / 100; // converte cm para metros
    let imc = peso / (alturaMetros * alturaMetros);
    let classificacao = "";
    let classeCSS = "";
    
    if (imc <= 18.5) {
        classificacao = "Abaixo do peso";
        classeCSS = "abaixo";
    } else if (imc <= 24.9) {
        classificacao = "Peso normal";
        classeCSS = "normal";
    } else {
        classificacao = "Sobrepeso";
        classeCSS = "sobrepeso";
    }
 
    //Saída
    document.getElementById("resultado").textContent = "Valor IMC: " + imc.toFixed(2);
    classificacaoEl.textContent = "Classificação: " + classificacao;
    
    // Atualiza a classe CSS para exibir a caixa colorida
    classificacaoEl.classList.remove("abaixo", "normal", "sobrepeso");
    classificacaoEl.classList.add(classeCSS); // <== ESSA LINHA FAZ FALTA
}

    //Detecta a tecla Enter //
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            calcularIMC();
        }
    });