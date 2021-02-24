var altura = 0;
var larguta = 0 ;
var vidas = 1;
var tempo = 50;
var tempoGameOver = 1500;

var criaMosquitoTempo = 1500;
var nivel = window.location.search;
nivel = nivel.replace('?', '');

if (nivel === 'normal'){
	criaMosquitoTempo = 1500;
	tempoGameOver = 1750
} else if(nivel === 'dificil'){
	criaMosquitoTempo = 1000;
	tempoGameOver = 2000;
} else if(nivel === 'chucknorris'){
	criaMosquitoTempo = 750;
	tempoGameOver = 3250;
} 


function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight;
	largura = window.innerWidth;
	console.log(largura, altura);
}

ajustaTamanhoPalcoJogo();

document.getElementById('cronometro').innerHTML = tempo; //iniciando cronometro da partida 

var cronometro = setInterval( function(){
	tempo--;
	if( tempo < 0){
			clearInterval(cronometro);
			clearInterval(criaMosquito);
			window.location.href="vitoria.html";

			} 

			else {
			
			document.getElementById('cronometro').innerHTML = tempo;
		}
}, 1000);
		
		function posicaoRandomica() {


			//remover mosquito(CASO EXISTA)
			if (document.getElementById('mosquito')){

				document.getElementById('mosquito').remove();

				if(vidas <= 3){
					document.getElementById('v' + vidas).src="imagens/coracao_vazio.png";
					vidas++
				}
		
			}

		var posicaoX = Math.floor(Math.random() * largura) -110; //-90 para nao ultrapassar a tela
		var posicaoY = Math.floor(Math.random() * altura) -110; //criando rolagens desnecessarias

				//solucionando números menores q 0
			while (posicaoX < 0 || posicaoY < 0){
					 posicaoX = Math.floor(Math.random() * largura) -110; 
					posicaoY = Math.floor(Math.random() * altura) -110; 

			}

			// ou com operador ternario de outra forma

			/* posicaoX = posicaoX < 0 ? 0 : posicaoX;
			 posicaoY = posicaoY < 0 ? 0 : posicaoY;
			
			*/
		console.log(posicaoX, posicaoY);

		//criar o elemento html
	//y altura e x largura
		var mosquito = document.createElement('img'); //elemento img 	
		mosquito.src = 'imagens/mosquito.png' //setando o caminho da imagem;
		mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
		mosquito.style.left = posicaoX + 'px'; //aplicando a largura randomica ao mosquito
		mosquito.style.top = posicaoY + 'px'; //aplicando a altura randomica ao mosquito
		mosquito.style.position = 'absolute'; // precisa ser absoluto para que os elem acima funcione;
		mosquito.id = 'mosquito';
		mosquito.onclick = function() {

			if (document.getElementById('mosquito')){

				document.getElementById('mosquito').remove();
			
			}
		};
		document.body.appendChild(mosquito);//exibindo o elemento criado no body

		
		
		
		}
posicaoRandomica();

// criando um novo mosquito automaticamente
var criaMosquito = setInterval(function(){
	posicaoRandomica();
	console.log(criaMosquitoTempo);
},criaMosquitoTempo);


  setInterval(function(){
  	 if(vidas > 3){
		vidas = 1;
		window.location.href="file:///C:/Users/Bruno/Desktop/projetos/CURSO%20UDEMY/Javascript/game-over.html?" + nivel;

	}
},tempoGameOver);


function tamanhoAleatorio() {
	//Math.random() produz um número aleatório decimal de 0 até perto de 1
	var classe = Math.round(Math.random() * 3);
	//math.round arredonda pra baixo se for -0.5 e para cima se for superior a 0.5;


	switch(classe) {
		case 1 : return 'mosquito1';
					break;
	    case 2 : return'mosquito2';
	    			break;
	    case 3 : return 'mosquito3';
	    			break;	
	    default : return 'mosquito1';
	    			break;		
	}  
}

function ladoAleatorio(){
	var lado = Math.floor(Math.random() * 2);
	//math.floor deixa o numero inteiro


	switch(lado) {
		case 0 : return 'ladoA';
					
	    case 1: return'ladoB';
	   
	}  
}