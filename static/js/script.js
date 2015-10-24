jobs= document.getElementsByClassName("jobs-box");
trab= document.querySelector("#trab");
skil = document.querySelector(".skills");


jobs[0].onmouseover = function(){
	eventoTexto("Lbook",1);
}
jobs[0].onmouseout = function(){
	eventoTexto("Animação Loading",0);
}

jobs[1].onmouseover = function(){
	eventoTexto("Tabela Responsiva",1);
}
jobs[1].onmouseout = function(){
	eventoTexto("Animação Loading",0);
}

jobs[2].onmouseover = function(){
	eventoTexto("LPhotos",1);
}
jobs[2].onmouseout = function(){
	eventoTexto("Animação Loading",0);
}

jobs[3].onmouseover = function(){
	eventoTexto("Animação Loading",1);
}
jobs[3].onmouseout = function(){
	eventoTexto("Animação Loading",0);
}

eventoTexto = function(texto,on){
	if(on == 1){
		trab.textContent = texto;
	}
	else{
		trab.textContent = "Trabalhos";
	}

	if(trab.style.transform == "rotateX(360deg)")
		trab.style.transform = "rotateX(0deg)";
	else if(trab.style.transform == "rotateX(0deg)")
		trab.style.transform = "rotateX(360deg)";
	else
		trab.style.transform = "rotateX(360deg)";


	
}