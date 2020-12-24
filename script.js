//var locations = ['Desktop', 'Documents', 'Images'];

var locations = {'Desktop' : [{'Videos pornos' : ['Scatophile.mp4', 'XX.mp4']}, 'Dates.txt'], 'Documents' : [{'Videos pornos' : ['Scatophile.mp4', 'XX.mp4']}, 'Vita&SlimaneCadeauRomane.mp4'], 'Images' : ['Coco_a_la_mer.png', 'Axel_nu.png']};
var Fichiers = {'Dates.txt' : 'Noël : 42/12/2020 \rChausette'}



var Title = document.getElementById ('textbase');
var indentationbase = Title.innerHTML;
var indentation = Title.innerHTML + "$ ";
document.getElementById ('saisi').value = indentation;
var caca = "";

function get_Folders(path){
    var aa = "axellebest@nicoco-computer: ~/Desktop/caca$ ls";
    var allChemin = aa.split('/');
    
    var allChemin2 = [];
    for (let i = 0; i < allChemin.length; i++){ 
        allChemin2[i] = allChemin[i + 1]
    }
   
    
    var chaine = allChemin2[allChemin2.length - 1];
   
    chaine = chaine.split("$")[0];
    allChemin2[allChemin2.length - 1] = chaine;
    
    
    return allChemin;

    

}
function enumerate(tlist, caca) {
    
    var tindentation = caca;
    var textfinal = ""
    var chose;

    //var textdansinput = document.getElementById ('saisi').value;
    //var tindentation = textdansinput.substr(textdansinput.lastIndexOf("\n")+1);
     

    if (tindentation.includes('/', 0)) {
        
        
        var Chemin1 = tindentation.split('/')[1];
        var chemin = "";
        let ii = 0;
        while (Chemin1[ii] != '$'){
            
            chemin += Chemin1[ii];
            ii += 1

        }
        console.log(chemin);
        choses = tlist[chemin];
        

    } else {
        
        choses = Object.keys(tlist);
    }
    
   
    //var choses = tlist["Desktop"];
    for (let i = 0; i < choses.length; i++){
        

        if (typeof(choses[i]) == 'object' && choses[i].length != 1){
            
            var choses2 = Object.keys(choses[0]);

            if (i == choses.length - 1){
                textfinal += choses2;
    
            } else{
                textfinal += choses2 + ", ";
    
            }
        } else {

            if (i == choses.length - 1){
                textfinal += choses[i];
    
            } else{
                textfinal += choses[i] + ", ";
    
            }

        }


        
        
    
    
    }
    
    return textfinal

}






function goto()  {
    
    var textdansinput2 = document.getElementById ('saisi').value;
    
    var derniereligne2 = textdansinput2.substr(textdansinput2.lastIndexOf("\n")+1);
   
   
    var textsaisi2 = derniereligne2.split("$")[1];
    textsaisi2 = textsaisi2.substring(1);
    
    
    var where = textsaisi2.replace('cd ', '');
    indentation = indentationbase + "/" + where + "$ ";

    caca = indentationbase + "/" + where + "$ ";
    
    return indentationbase + "/" + where + "$ ";
    //return textdansinput2;
    
    
}

function openfile(){
    var textdansinput2 = document.getElementById ('saisi').value;
    console.log(textdansinput2);
    
    var derniereligne2 = textdansinput2.substr(textdansinput2.lastIndexOf("\n")+1);
   
   
    var textsaisi2 = derniereligne2.split("$")[1];
    textsaisi2 = textsaisi2.substring(1);
    
    
    var file = textsaisi2.replace('cat ', '');
    console.log(file);
    
    //file = "Dates.txt";
    return Fichiers[file];
    var win = window.location.pathname;
    win = win.replace('Game1.html', '');
    var path = "file:/" + win + 'Files/' + file;
    console.log(path);
    fetch(path)
        .then(response => response.text())
        .then(data => {
            return data
            
        });
    

}

var commandes = {'ls': enumerate(locations, indentation), 'cd': goto(), 'cat': openfile()}

var commandesdispos = "";


document.getElementById ('dispos').innerHTML += Object.keys(commandes);

function runScript(e) {
    
    //See notes about 'which' and 'key'
    if (e.keyCode == 13) {
        submit();
        return false;
    }
    if (e.keyCode == 38) {
        console.log("caca");
        copyagain();
        
        return false;
    }
    
}
function runScript2(e) {
    submit();
    return false;
    
    
}

function runScript3(e) {
    valider();
    return false;
    
    
}

function valider(e) {
    if (document.getElementById ('fin').value == "42/12/2020"){
        document.location.href = "https://noeldenico.github.io/Game2.html"
    }
    return false;
    
    
}

function copyagain(){
    var textdansinput = document.getElementById ('saisi').value;
    var derniereligne = textdansinput.substr(textdansinput.lastIndexOf("\n")-1);
   
   
    var textsaisi = derniereligne.split("$")[1];
    var textsaisi = textsaisi.substring(1);
    document.getElementById ('saisi').value += textsaisi;
    return false;
}

function submit() {
    var textdansinput = document.getElementById ('saisi').value;
    var derniereligne = textdansinput.substr(textdansinput.lastIndexOf("\n")+1);
   
   
    var textsaisi = derniereligne.split("$")[1];
    var textsaisi = textsaisi.substring(1);
    var commandesaisi = textsaisi.split(' ')[0];
    

    
    if (commandesaisi in commandes){
       
        if (commandesaisi != "cd") {
            var txt = commandes[commandesaisi];
            var txt2;
            if (commandesaisi == 'ls'){
                console.log(indentation);
                caca = indentation;
                var txt2 = enumerate(locations, indentation)
                document.getElementById ('saisi').value += '\r' + txt2 + '\r' + '\r' + indentation;
            } else{
                document.getElementById ('saisi').value += '\r' + txt + '\r' + '\r' + indentation;

            }
            
            
           

        } else {
            
            var text = goto();
            
            document.getElementById ('saisi').value += '\r' + '\r' + indentation;
            
            
            
        }
        

    } else{
        document.getElementById ('saisi').value = document.getElementById ('saisi').value.replace(commandesaisi, "");
        alert("Cette commande n'existe pas ou n'est juste pas implémentée")
        
    }

   
  }