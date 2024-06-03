function sortear () {
    let quantidadeNumero = document.getElementById('quantidade').value ;
    let doNumero = document.getElementById('de').value ;
    let ateNumero = document.getElementById('ate').value ;

    let sorteados = []
    let numero;
    for (let i = 0; i < quantidadeNumero; i++) {
         numero = obterNumeroAleatorio(doNumero,ateNumero);
         
         while(sorteados.includes(numero))
            numero = obterNumeroAleatorio(doNumero,ateNumero);
         sorteados.push(numero);}

    let resultado = document.getElementById ('resultado')
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterarStatusBotao()

    if  ( doNumero >= ateNumero) {
        alert(`Campo ${doNumero} deve ser menor que o campo ${ateNumero}.`);
        return
    }
}
if (quantidadeNumero > (ateNumero - doNumero + 1)){
    alert(`Campo ${quantidadeNumero} deve ser menor ou igual ao intervalo formado no campo ${doNumero} até o campo ${ateNumero}. Verifique!`);
    }


function obterNumeroAleatorio(de, ate) {
   return Math.floor(Math.random()* (ate - de ) + de);

}


function alterarStatusBotao (){
    let botao = document.getElementById ('btn-reiniciar');
    
    if (botao.classList.contains("container__botao-desabilitado")){;
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao")
    } else  {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");}
        
        

}


function reiniciar () {
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value =  "" ;
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao ();}