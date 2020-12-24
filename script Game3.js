var text = document.getElementById ('calcul').innerHTML;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

var nb1 = getRandomInt(300);
var nb2 = getRandomInt(50);
text = text.replace('nombre1', nb1);
text = text.replace('nombre2', nb2);
var result = nb1 * nb2;
console.log(result);

document.getElementById ('calcul').innerHTML = text;

function runScript3(e) {
    if (e.keyCode == 13){
        valider();
    return false;

    }
    
    
    
}

function showStuff(id) {
    document.getElementById(id).style.display = 'block';
  }

  function hideStuff(id) {
    document.getElementById(id).style.display = 'none';
  }

function valider() {
    if (document.getElementById ('saisi2').value == result.toString()){
        showStuff("hide");
        hideStuff("show");
        hideStuff("show2");
        console.log("True")
    } else{
        console.log("False : " + result + " , " + document.getElementById ('calcul').value)
    }
    return false;
    
    
}

