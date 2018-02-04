window.onload = function() {
        setTimeout(function () {
        //Cria um novo elemento
        var novoBotao = document.createElement("button");
        
        //pega o elemento existente que vai receber o novo div
        var alvo = document.getElementById("divBotao");
        
        //Adiciona um texto ao DIV
        novoBotao.textContent = "Entrar";
        novoBotao.style.verticalAlign = 'middle';
        novoBotao.className = 'button button5';
        novoBotao.id = 'botaoEntrar';    

        //Adiciona o novo div ao elemento existente
        alvo.appendChild(novoBotao);
                
    }, 4000);
 
};

/*function openIndex(){
    setTimeout(opi, 5000)

    function opi (){
       
       window.open('index.html')
    }
} openIndex();*/

$(function() {

    setTimeout(function() {

        $('.fly-in-text').removeClass('hidden');
    }, 500);

});

(function () {

    var preload = document.getElementById("preload");
    var loading = 0;
    var id = setInterval(frame, 64);

    function frame() {
        if (loading == 100) {
           clearInterval(id);
           window.open("index.html", "_self");
        }  else {
           loading = loading + 1;
           if (loading == 90) {
             preload.style.animation = "fadeout 1s ease";
            }
        }
    }

})();

