document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
});
const formulario = document.getElementById ("formulario")


formulario.addEventListener("submit", function (event){


event.preventDefault()


//CAPTURAR OS VALORES DIGITADOS PELO USUARIO

const nome = document.getElementById("nome").value
const email = document.getElementById("email").value
const telefone = document.getElementById("telefone").value
const cargo = document.getElementById("moitvocont").value
const mensagem = document.getElementById("mensagem").value

if(telefone.trim() === ""){
alert("Digite seu nome")
return
}

const textoWhatsapp = 
`
Olá gostaria de me candidatar ao processo seletivo da Microsoft
Nome: ${nome}
Email: ${email}
Telefone: ${telefone}
Cargo: ${cargo}
Observações: ${mensagem}
`

//CONDIFICAR A MENSAGEM  SER ULTILIZADA NA URL
const mensagemCodificada = encodeURIComponent (textoWhatsapp)
//NUMERO DO WHATSAPP
const numeroWhatsapp = "5511991609440"
//MONTA O LINK WHATSAPP
const link = "https://wa.me/" + numeroWhatsapp + "?text=" + mensagemCodificada

window.location.href = link

})