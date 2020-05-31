const player1 = "X"
const player2 = "O"
var playtime = player1
var gameover = false

atualizamostrador();
inicializar();

function atualizamostrador(){

    if(gameover){return}

    if(playtime == player1){

        var player = document.querySelectorAll("div#mostrador img")[0]
        player.setAttribute("src","jdv/x.jpg");
    }else{

        var player = document.querySelectorAll("div#mostrador img")[0]
        player.setAttribute("src","jdv/circulo.png");
    }
}

function inicializar(){

    var espacos = document.getElementsByClassName("espaço");

    for(var i = 0; i < espacos.length; i++){
     
            espacos[i].addEventListener("click", function(){
            if(gameover){return0}

            if(this.getElementsByTagName("img").length== 0){

                if  (playtime == player1) {

                    this.innerHTML = "<img src='jdv/x.jpg' height='50px'>";
                    this.setAttribute("jogada", player1)
                    playtime = player2

                }else{

                    this.innerHTML = "<img src='jdv/circulo.png' height='50px'>";
                    this.setAttribute("jogada", player2)
                    playtime = player1  
                }
                atualizamostrador();
                verificarvencedor();

            }

        }
        
        
            )
    }
}
 async function verificarvencedor(){

    var a1 = document.getElementById("a1").getAttribute("jogada")
    var a2 = document.getElementById("a2").getAttribute("jogada")
    var a3 = document.getElementById("a3").getAttribute("jogada")

    var b1 = document.getElementById("b1").getAttribute("jogada")
    var b2 = document.getElementById("b2").getAttribute("jogada")
    var b3 = document.getElementById("b3").getAttribute("jogada")

    var c1 = document.getElementById("c1").getAttribute("jogada")
    var c2 = document.getElementById("c2").getAttribute("jogada")
    var c3 = document.getElementById("c3").getAttribute("jogada")

    var vencedor = ""

    if((a1 == b1 && a1 ==c1 && a1 != "")||(a1 == a2 && a1 == a2 && a1 == a3 && a1 !="")||(a1 == b2 && a1 == c3 && a1 != "") ){
        vencedor = a1;
    }else if((b2 == b1 && b2 == b3 && b2 !="")||(b2 == a2 && b2 == c2 && b2 != "")||(b2 == a3 && b2 == c1 && b2 != "")){
        vencedor = b2;
    }else if((c3 == c2 && c3 == c1 && c3!="")||(c3 == a3 && c3 == b3 && c3!="")){
        vencedor = c3;
    }else if(a1 != "" && a2 != "" && a3 != "" && b1 !="" && b2 !="" && b3 !="" && c1!="" && c2!="" && c3!=""){
        vencedor = "VELHA"
    }

    if(vencedor != ""){
        gameover = true;

        await sleep(50)
        
        var m = document.getElementById("res")
        m.innerHTML+=(vencedor)
        if (vencedor == "VELHA") {
            alert("DEU VELHA")
        }else{
        alert("O ganhdor foi o "+vencedor)
        }
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}