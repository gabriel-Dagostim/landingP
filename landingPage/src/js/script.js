document.addEventListener("DOMContentLoaded", function () {
    const text = "Bem vindo a Zenith"; // Texto a ser digitado
    let index = 0;
    const typingSpeed = 100; // Velocidade da digitação (em milissegundos)

    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, typingSpeed);
        }
    }

    typeEffect(); // Iniciar o efeito de digitação
});

