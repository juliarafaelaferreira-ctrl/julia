// Função para mudar o conteúdo da Jornada da Semente
function mostrarEtapa(etapa) {
    const caixa = document.getElementById('caixa-conteudo');
    
    if (etapa === 1) {
        caixa.innerHTML = "<h3>🟤 1. Preparando o Solo Fértil</h3><p>Tudo começa na terra! O agricultor cuida do solo, nutre a terra com matéria orgânica e planta a sementinha com muita precisão e tecnologia.</p>";
        caixa.style.borderColor = "#8b5a2b";
        caixa.style.backgroundColor = "#fff8e1";
    } else if (etapa === 2) {
        caixa.innerHTML = "<h3>🔵 2. A Importância da Água</h3><p>A semente precisa beber! Com sistemas modernos de irrigação gota a gota, os produtores economizam água e dão a quantidade exata que a plantinha precisa para acordar.</p>";
        caixa.style.borderColor = "#3498db";
        caixa.style.backgroundColor = "#e1f5fe";
    } else if (etapa === 3) {
        caixa.innerHTML = "<h3>🟢 3. O Cuidado e Crescimento</h3><p>A planta cresce forte! Usando a luz do sol e defensores naturais, ela se desenvolve de forma sustentável, limpando o ar e gerando oxigênio.</p>";
        caixa.style.borderColor = "#2ecc71";
        caixa.style.backgroundColor = "#e8f5e9";
    } else if (etapa === 4) {
        caixa.innerHTML = "<h3>🟡 4. Colheita e a Sua Mesa!</h3><p>Hora de colher! Máquinas tecnológicas colhem o alimento que é transportado com cuidado até as feiras e mercados, trazendo saúde para a sua família!</p>";
        caixa.style.borderColor = "#f1c40f";
        caixa.style.backgroundColor = "#fffde7";
    }
}

// Função para checar a resposta do Quiz
function verificarResposta(correto) {
    const resultado = document.getElementById('resultado-quiz');
    
    if (correto) {
        resultado.innerHTML = "🎉 Parabéns! Você acertou! O Sol dá energia para a planta crescer forte! ☀️🌱";
        resultado.style.color = "#2ecc71"; // Verde sucesso
    } else {
        resultado.innerHTML = "❌ Ah, quase! Tente de novo! Dica: As plantas adoram o dia e o céu limpo... ☁️";
        resultado.style.color = "#fff"; // Branco para destacar no fundo vermelho
    }
}
