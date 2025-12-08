function enviarFormulario() {
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    document.getElementById("status").innerText =
        `Valeu, ${nome}! Sua mensagem foi enviada: "${mensagem}"`;

    return false;
}
