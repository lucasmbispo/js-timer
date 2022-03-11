
var display = document.getElementById('display');

var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');
var comecar = document.getElementById('comecar');

var timersec;



var actualmin
var actualsec;

var interval;




for(var i=0; i<= 60; i++){
  minutos.innerHTML+='<option value="'+i+'"> '+i+'</option>';
}

for(var i=1; i<= 60; i++){
  segundos.innerHTML+='<option value="'+i+'"> '+i+'</option>';
}

comecar.addEventListener('click',function(){
  actualmin = minutos.value;
  actualsec = segundos.value;

  display.childNodes[1].innerHTML = actualmin + ":"+actualsec;

  interval = setInterval(function(){

    actualsec--;


    if(actualsec <=0) {
      if (actualmin > 0) {
        actualmin--;
        actualsec = 59;
      } else {
        alert("Acabou!");
        document.getElementById("sound").play();
        clearInterval(interval);

      }
    }

    display.childNodes[1].innerHTML = actualmin + ":"+actualsec;
  },1000);

})

