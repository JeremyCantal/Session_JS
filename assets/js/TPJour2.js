// Exercice :

// ES5
var tab8 = [6, 5, 6, 8, 12, 5, 7, 3, 0];
function premelemtab5(tab){
    return tab[0];
}
console.log(premelemtab5(tab8))

// ES6

const premelemtab6 = (tab) => tab[0];

var res = premelemtab6(tab8);
console.log(res);

// *** ****** TP-AlgoJS_J2 *******

// 1)
    // ES5 
    var tabnb = [12, 1424, 56, 578, 98, 56, 45, 23, -452, 58, -7, 65, 13, 0];
    function premelem(tab){
        return tab[0];
    }
    console.log(premelemtab5(tabnb))

// ES6
    const premelemt = (tab) => tab[0];
    var res = premelemt(tabnb);
    console.log(res);

// Fonction âge en jours
// ES5
    var age = /* prompt("Quel est votre âge ? ", 0)*/ 31 ;
    function ageenjour(age){
        return console.log("Votre âge (" + age + ") en jours est : " + age * 365 + ".");
    }
    ageenjour(age);

// ES6
    const ageenjour1 = (age) => age * 365;
    var res = console.log(ageenjour1(age));

// 2)
// ES5
    var nbminutes = 22;
    function nbsecondes(nbr){
        return console.log("Ce nombre vaut " + nbr * 60 + " secondes.");
    }
    nbsecondes(nbminutes);

// ES6
    const nbsecondes2 = (nbr) => nbr * 60;
    var res = nbsecondes2(nbminutes);
    console.log(res);

// 3)
// ES5
    var tableau = [2, 3, 5];
    var sommeetproduit = tableau.reduce(
         function(som, elemnt, prod){
         return ("Somme : " + som + ". Produit : " + elemnt);
     }
     );
    console.log(sommeetproduit);

// 4
var a = 1245.458;
var str = "Hello Wolrd !";
// document.write(a, str);
// document.writeln("<h1> 1245.458 </h1>");

// 5)

var notesetudiants = [11, 8, 15, 17, 3, 14, 16, 10, 19, 13];

// *********** Affiche le tableau ***************
function affiche_tableau (t) {
         document.writeln('<p>le tableau est :</p>');
         document.writeln('<table border="1"><tr>');
         for (var i=0 ; i<t.length ; i++) {
             document.writeln('<td>',t[i],'</td>');
         }
         document.writeln('</tr></table>');
       }


function afficheTab(tab){
    return tab;
}
console.log(afficheTab(notesetudiants));

// *********** Donne les notes au dessus de la moyenne ***************

function notesup(tab){
    let i = 1;
    tab.filter(x => x >= 10)
    .forEach(
        function(x){
            console.log(i + ") = " + x);
            i++;
        }
    )
}
notesup(notesetudiants);

// *********** Calcul la moyenne ***************

function moyenne(tab){
    let somme = 0
    for(var i = 0; i < tab.length; i++){
        somme += tab[i];
    }
    return somme / tab.length;
}
console.log("La moyenne des notes est : " + moyenne(notesetudiants));

// *********** Renvoie la note max ***************

function notemax(tab){
    let max = 0;
    for(var i = 0; i < tab.length; i++){
        if(max < tab[i]){
            max = tab[i];
        }
    }
    return max;
}
console.log("La note la plus élevée est : " + notemax(notesetudiants));

// *********** Chercher une note ***************

var b = 17;
var i = 0;
function trouvenote(tab, a){
    while(i < tab.length){
        if(tab[i] == a){
            return console.log("La note " + a + " existe dans le tableau.");
        }
        else{
            i++;
        }  
    }
    return console.log("La note " + a + " saisie n'est pas dans le tableau.");
}
console.log(trouvenote(notesetudiants, b));



