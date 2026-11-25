document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
});

const formulario = document.getElementById("form-Whats");

formulario.addEventListener("submit", function(event) {

    // Impede que a página recarregue
    event.preventDefault();

    // Captura os dados preenchidos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const motivo = document.getElementById("motivo").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica o nome
    if (nome === "") {
        alert("Por favor, digite seu nome!");
        return;
    }

    // Monta a mensagem para o WhatsApp
    const textoWhatsapp = `
Olá! Gostaria de entrar em contato com a equipe da Sabrina Neublum Artes & Festas.

*Nome:* ${nome}
*E-mail:* ${email || "Não informado"}
*Telefone:* ${telefone || "Não informado"}
*Motivo do contato:* ${motivo}
*Observações:* ${mensagem || "Nenhuma"}
`;

    // Codifica os caracteres para a URL
    const mensagemCodificada = encodeURIComponent(textoWhatsapp);

    // Coloque aqui o WhatsApp verdadeiro da Sabrina
    const numeroWhatsapp = "5511996440067";

    // Monta o link do WhatsApp
    const link = "https://wa.me/" + numeroWhatsapp
        + "?text=" + mensagemCodificada;

    // Redireciona para o WhatsApp
    window.open(link, "_blank");

});
