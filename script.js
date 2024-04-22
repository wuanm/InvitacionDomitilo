

//const bocina =document.getElementById("bocina");
//const musica =new Audio('audio.mp3')
const musica=document.getElementById("miAudio")
const btnUbicacion =document.getElementById("botonUbicacion")
const btnConfirmar =document.getElementById("botonConfirmar")

let boton =true;


/*window.onload=function(){
  window.alert( "Por favor, toca la imagen una vez")
}*/

btnUbicacion.addEventListener("click",function(){
  this.style.background='green';
  abrirUbicacion() ;
  
});

btnConfirmar.addEventListener("click", function(){
  this.style.background='green';
  //bloqueo el boton
  // Desactivar el botón utilizando JavaScript
if(boton){
  Confirmar();
  boton=false;

}else{
  console.log("boton desabilitado")
}

  

})


function abrirUbicacion() {
  window.open("https://maps.app.goo.gl/YGatjgVLtuZDrfao7", "_blank");

}

function Confirmar(){
  window.open("https://wa.me/8441741241?text=Gracias%20por%20la%20invitación%20, %20asistiré");
}

// Agrega un evento de clic al elemento de audio
function inicio() {
   if (musica.paused) {
    // Si la música está en pausa, la reproducimos
    musica.play().catch(error => {
      console.error("Error al reproducir el audio:", error);
    });
  } else {
    // Si la música se está reproduciendo, la pausamos
    musica.pause();
  }
}


/* function pauseAudio() {
  audio.pause();
}*/
