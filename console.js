// Initialisation tableau de donnée
let mot = ['javascript', 'arinfo', 'pancake','voiture', 'telephone', 'developpeur','chomeur'];

// Genere un mot aleatoire du tableau
/*Math.floor permet d'arondir à l'entier inferieur, 
en combinant Math.random et Math.floor, on genere 
un nombre entier aleatoire.
Ici, avec la methode Math.floor et Math.random, on genere 
dans le tableau une position aleatoire multiplie par la longueur du tableau 
*/
let Secretword = mot[Math.floor(Math.random()* mot.length)];
console.log('Le mot secret est : ',Secretword);

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
    alert(tabreponse.join('')); //Montre la progression du joueur
    /*les element sont concaténé dasn un chaine de caractere, separé oar un espace*/
}