function gerarLetra() {
    /* ESCOLHER LETRA DO ALFABETO */
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    /* ESCOLHER LETRA ALEATORIA */ 
    const letraAleatoria = letras[Math.floor(Math.random() * letras.length)];

    /* EXIBIR LETRA DO ALFABETO */
    document.getElementById("letra").innerText = letraAleatoria;
}
