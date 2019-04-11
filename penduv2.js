let motSecret = "proposition" ;
let reponse ;

function mfInitReponse(){
reponse = "" ;
for (let i = 0 ; i < motSecret.length ; i++) {
reponse += '.' ;
}
document.pendu_form.reponse_txt.value = reponse ;
}

function mfAfficherAlphabet() {

    var alphabet = "abcdefghijklmnopqrstuvwxyz" ;
    
    document.write("<table style=\"border : 1px solid yellow\"> ") ;
    document.write('<tr>') ;
    for (var i = 0 ; i < alphabet.length ; i++) {
    document.write('<td>') ;
    var lettre = alphabet.charAt(i) ;
    var buf = "<button onClick=\"mfChkCar(this.value)\">" + lettre + "</button>" ;
    document.write(buf) ;
    document.write('</td> ') ;
    }
    document.write('</tr>') ;
    document.write("</table>") ;
    }

    function mfChkCar(car)
    {
    var buf = '' ;
    for (var i = 0 ; i < motSecret.length ; i++) {
    if (motSecret.charAt(i) == car ) {
    
    buf += car ;
    }
    else {
    
    buf += reponse.charAt(i) ;
    }
    }
    document.pendu_form.reponse_txt.value = buf ;
    reponse = buf ;
    }