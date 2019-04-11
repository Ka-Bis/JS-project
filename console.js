// Initialisation tableau de donnée
let mot = ['javascript', 'arinfo', 'pancake','voiture', 'telephone', 'developpeur','chomeur','giletjaune'];

// Genere un mot aleatoire du tableau
/*Math.floor permet d'arondir à l'entier inferieur, 
en combinant Math.random et Math.floor, on genere 
un nombre entier aleatoire.
Ici, avec la methode Math.floor et Math.random, on genere 
dans le tableau une position aleatoire multiplie par la longueur du tableau 
*/
let Secretword = mot[Math.floor(Math.random()* mot.length)];
// console.log('Le mot secret est : ',Secretword);

//Reponse
// Initialisation  tableau reponse
let tabreponse = [];

/*A chaque tour dans la boucle, on ajoute un nouvel element
au tableau reponse, à la position reponse[i]. Lorsque la boucle s'arrete,
la taille des '_' sera aussi long que le mot generer aleatoirement dans un tableau.
Ex: si mot est arinfo, la taille des '_' sera de 6 '_'.
Donc mot: arinfo => ["_","_","_","_","_","_"] => ["a","r","i","n","f","o"] */
for (let i= 0; Secretword.length;i++){
    tabreponse[i] = "_";
}
let nblettresManquantes = Secretword.length;

/* let nblettresManquante est egale à la longueur de Secretword.
Cela permet de compter le nb de lettre du mot secret que le joueur doit encore trouver
A chaque fois que le joueur trouve une lettre, la valeur de la variable diminue de 1
autant de fois que la lettre apparait dans le mot secret*/

while (nblettresManquantes > 0) {
    alert(tabreponse.join(' ')); //Montre la progression du joueur
    /*les element sont concaténé dans un chaine de caractere, separé par un espace
    Ensuite, elle est affiché dans le popup.
    Ex: le mot est arinfo joueur a trouvé le 'a' et le 'r' 
    => rendu dans le tableau => ["a","r","_","_","_","_"] 
    => rendu dans le popup => a r _ _ _ _*/

    let reponse = prompt("Devine un lettre, ou clique sur annuler pour quiter");
    /* Ici on repcupere la reponse du joueur aue l'on stocke dans une 
    variable 'reponse'. Apres il peut y a avoir 4 chose diffe :
    1- Le joeur appuis sur ANNULER => la valeur de reponse est 'null"
    Elle est genere avec la 1ere condition. Si la condition est 'true'
    on sort de la boucle avec 'break" 
    
    2/3- le joueur ecrit plusieur ou aucune lettre dans le champ.
    S'il click sur OK en n'ecrivant rien => la valeur de la reponse
    sera vide donc reponse.length = 0.
    S'il tape plusieur lettre, la valeur de reponse.length > 1
    elle genere par la 2eme condition. Si la valeur est > 1
    un message d'alerte s'affichera en demandant de n'ecrire qu'une
    seule lettre
    
    4- La reponse du joueur est valide. Le joueur n'a tapé qu'une seule 
    lettre. Dans ce cas lors de la validation, le programme doit mettre a jour 
    la progression du jeu en fonction de la reponse*/
    if (reponse === null) {
        break;
    } else if (reponse.length !== 1) {
        alert("Saisie une seule lettre !");
    } else {
        for (let j=0; j < Secretword.length; j++){
            if (Secretword[j] === reponse){
                tabreponse[j] = reponse;
                nblettresManquantes--;
            }
        }
        /*Dans la derniere condition, la boucle permet de parcourir
        la longeur du mot secret. A l'interieur de la boucle, la condition
        'if' permet de comparer la lettre demandé au mot secret. Si la lettre
        correspond a une lettre du mot secret on met à jour le pendu*/
    }
}

alert(tabreponse.join(' '));
alert(`Bravo ! le mot secret est ${Secretword}`);