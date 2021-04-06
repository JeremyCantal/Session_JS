// Maths : contient des méthodes permettant de réaliser des opérations sur les nombres
// Date : permet de manipuler les dates
// ...

        console.log(Math.round(2.1)); // Affiche 2
        console.log(Math.pow(2,3)); // Affuche 8
        console.log(Math.min(2, 1, 5, 47, 45, -4)); // Affiche la val min
        console.log(Math.max(2, 1, 5, 47, 45, -4)); // Affiche la val max
        console.log(Math.random()); // Affiche un nombre entre 0 et 1
        console.log(Math.floor(Math.random()* 10)); // Affiche un entier entre 0 et 9
        console.log(Math.sqrt(4)); // Affiche 2 (résultat de la racine carré)
        console.log(Math.abs(-4)); // Affiche la valeur absolue

// opérateurs :

// typeof : pour obtenir le type d'une variable
// new : pour créer un objet en utilisant un constructeur
// this : Pour désigner l'objet courant

//in : pour tester si un indice est dans le tableau, si une méthode appartienta une objet, ...
        var tab = [1, 2, 3];
        if (2 in tab){
            console.log("Oui");
        }

        var perso = {
            nom: 'Wick',
            prenom: 'John'
        };
        if('nom' in perso){
            console.log("Oui");
        }

// Contrôle si 'Wick' existe dans perso.
        Object.keys(perso).forEach(function(key) {
            if(perso[key] == 'Wick') {
                console.log("Exists");
            }
        });

        var keys = Object.keys(perso);
        for(key of keys){
            console.log(key + ' ' + perso[key]);
        }

        perso.nom === "Taykhan" ? console.log("Yes") : console.log("Non");

// instanceof : retourne true si l'objet donné est du type spécifié, false sinon

        var jour = new Date(2021, 04, 02);
        if(jour instanceof Date)
            console.log("Oui"); // Affiche oui

// Une constante est un élément qui ne peut pas changer de valeur

        const PI = 3.1415;
        console.log(PI);
        // Si on essaie : PI = 5; // ==> Erreur

        const obj = {
            nom: 'Taykhan',
            prenom: 'Lucas'
        };

        // obj = {};
        // Cependant, l'instruction suivante est correcte et ne lève pas d'exception
        obj.nom = "Gabin";
        obj['prenom'] = 'Binou';
        obj.age = 50;

        console.log(obj);

        // Tableaux :

        const tab1 = [2, 3, 8];

        // tab = [];

        // Cependant, l'instruction suivante est correcte et ne lève pas d'exception
        tab1[2] = 1;
        tab1[0] = 9;
        console.log(tab1);


        function produit(a, b){
            if(isNaN(a) || isNaN(b))
                throw "Les paramètres doivent-être de type number";
            return a * b;
        }

        try {        
            console.log(produit(2, "a")); // Affiche Nan
        } catch (e) {
            console.error(e);
            // ou : console.log(e);
        }
        console.log(produit(5, 5));

// Gèrer la division par 0 avec une exception si le dividende est à 0.


const produit3 = (a, b) => {
    isNaN(a) || isNaN(b) ? (
        function () { 
            throw "Les paramètres ne sont pas des nombres !" }
            ()) : a * b;
};

produit3(2, 3);

// Exercice 

function diviser(a, b){
    if(b == 0)
        throw "Impossible, le dividende est égal à 0, veuillez modifier la valeur";
    return a / b
}
try {        
    console.log(diviser(2, 0)); 
} catch (e) {
    console.error(e);
}
console.log(diviser(5, 5));


// Expression régulières = REGEX

// Permettre de vérifier si des chaînes de caractères respectent certains formats
// email, mot de passe, numéro de tele
// Recherche d'un sous chaîne dans une chaîne de caractères

var str = "Bonjour tout le monde";
var pos = str.search("tout"); // Sensible à la casse
var pos1 = str.search("Tout"); // Sensible à la casse => affiche -1 car false
var pos2 = str.search(/Tout/i); // insensible à la casse
console.log(pos);
console.log(pos1);
console.log(pos2);

var str1 = /AB/i;
var result = str1.test("ababaabbaaab"); // '.test' affiche true ou false
console.log(result);

var chaine = "ababaabbaaab";
var txt = chaine.replace(/ab/g, "c"); // le 'g' précise de modifier TOUS les 'ab' en 'c'
console.log(txt);

// Permet d'obtenir un résultat sous forme d'objet
var str2 = /AA/i;
var resultat = str2.exec(chaine);

console.log("Chapine trouvée : " + resultat[0]);

console.log("Indice de la première occurence : " + resultat.index);

console.log("Texte complet : " + resultat.input);

var str3 = /AA/gi; // => 'g' pour toutes les occurences et 'i' pour la casse
var resultat1 = chaine.match(str3);// '.match' retourne un tableau contenant toutes les occurences du str demandé
console.log(resultat1);

var str4 = /ba?c/i; // => le '?' précise 0 ou 1 seul 'a'
console.log(str4.test("bac")); // Affiche true
console.log(str4.test("baac")); // Affiche false


// La valeur doit contenir 4 chiffres obligatoirement
var p = "2345";
var str5 = /^([0-9a-zA-A]){6,20}$/;

if(p.match(str5)){
    console.log("Yes");
}
else{
    console.log("No");
}

function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    console.log("You have entered an invalid email address!")
    return (false)
}

var res = ValidateEmail("mysitetest.com");
console.log(res);




var test = "bonjour" + "hey";
console.log(test);

