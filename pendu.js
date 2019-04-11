let mot = ['javascript', 'arinfo', 'pancake','voiture', 'telephone', 'developpeur','chomeur','giletjaune'];
// let mot = new Array();

let motSecret = mot[Math.floor(Math.random()*mot.length)];
console.log(motSecret);

// let reponsePendu = alert("Devine le mot");

let tabReponse = [];
for (let i=0; i<motSecret.length;i++){
    tabReponse[i]= "_";
}

let nbNombreManquant = motSecret.length;

while (nbNombreManquant > 0) {
    alert(tabReponse.join(" "));
    let reponsePendu = prompt("Saisie une lettre, ou clique sur ANNULER pour quitter");

    if(reponsePendu === null) {
        break;
    } else if (reponsePendu.length !== 1){
        alert("Tu dois saisir une lettre !");
    } else {
        for (let j=0; j < motSecret.length; j++){
            if(motSecret[j]=== reponsePendu){
                tabReponse[j] = reponsePendu;
                nbNombreManquant--;
            }
        }
    }
  
}

alert(tabReponse.join(" "));
alert(`Bravo ! le mot secret est ${motSecret}`);
