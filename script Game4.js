var map = [[2, 0, 1, 0, 0, 1],[1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0], [0, 1, 1, 0, 0, 0], [0, 0, 1, 0, 1, 1], [1, 0, 1, 0, 0, 3]];
var pos = [0, 0];


function droite(){
  oldpos = [];
  oldpos[0] = pos[0];
  oldpos[1] = pos[1];
  if (map[pos[1]][pos[0] + 1] != 1){
    pos[0] +=1
  }
  map[oldpos[1]][oldpos[0]] = 0;
  map[pos[1]][pos[0]] = 2;
  
  actualise(oldpos)
  return false

}
function gauche(){
  oldpos = [];
  oldpos[0] = pos[0];
  oldpos[1] = pos[1];
  if (map[pos[1]][pos[0] - 1] != 1){
    pos[0] -=1
  }
  map[oldpos[1]][oldpos[0]] = 0;
  map[pos[1]][pos[0]] = 2;
  
  actualise(oldpos)
  return false

}
function bas(){
  oldpos = [];
  oldpos[0] = pos[0];
  
  oldpos[1] = pos[1];
  if (map[pos[1] + 1][pos[0]] != 1){
    pos[1] +=1
  }
  
  map[oldpos[1]][oldpos[0]] = 0;
  map[pos[1]][pos[0]] = 2;
  
  actualise(oldpos)
  return false

}
function haut(){
  oldpos = [];
  oldpos[0] = pos[0];
  
  oldpos[1] = pos[1];
  if (map[pos[1] - 1][pos[0]] != 1){
    pos[1] -=1
  }
  
  map[oldpos[1]][oldpos[0]] = 0;
  map[pos[1]][pos[0]] = 2;
  
  actualise(oldpos)
  return false

}
function showStuff(id) {
  document.getElementById(id).style.display = 'block';
}
function actualise(old){

  if (pos[0] == 5 && pos[1] == 5){
    showStuff("hide");
    document.getElementById("map").innerHTML = '';
  } else {
    var img = document.createElement("img");
    img.src = "pa.png";
    img.width = 50;
    
    document.getElementById("map").rows[old[1]].cells[old[0]].innerHTML = '';
    document.getElementById("map").rows[pos[1]].cells[pos[0]].appendChild(img);
    
    console.log(document.getElementById("map").rows[pos[1]].cells[pos[0]].innerHTML)
    console.log(pos[0], pos[1])

  }
  
  

}
