var arrayRockets: any[] = new Array();  //Array coets
var arraythrusters: number[] = new Array();  //Array propulsors de cada coet

function newRocket(){
    var rocketCode: any = prompt("Siusplau, introdueix un codi alfanumèric de 8 caràcters");   
    var codeRegex = /^[A-Z0-9]{8}$/i;  // i case insensitive
    var thrustersNum: any;
    var i;

    if(!codeRegex.test(rocketCode)){  // Es cumpleix el format del codi?
        alert("Cal que el codi contingui 8 caràcters alfanumèrics"); 
    } else {
        if (arrayRockets.length != 0){
            for(i = 0; i < arrayRockets.length; i++){
                if(rocketCode == arrayRockets[i].rocketCode){ // Comprovem si el codi existeix
                console.log(arrayRockets[i]);
                alert("Aquest codi ja existeix");
                }            
            }                
                        
        } 
            thrustersNum = prompt("Introdueix el número de propulsors que tindrà");  // codi ok i no repetit. Propulsors?
            var newRocket: Rocket = new Rocket(rocketCode);  // Creem coet
            arrayRockets.push(newRocket);
            console.log(arrayRockets);                
        
            var resultDisplay = document.getElementById("result") as HTMLDivElement;
            var divResult = document.createElement("div");  //Crrem div on imprimir resultat

            divResult.innerHTML = "CODI COET " + arrayRockets.length + " : " + rocketCode + "<br>" +
            "PROPULSORS: " + thrustersNum + "<br><br>";

            resultDisplay.append(divResult);
            
    }
}  

