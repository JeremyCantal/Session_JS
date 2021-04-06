function maFonfonction() {

    //*****Les Tableaux *****
    //tab[tab.length] = 7; ou tab.push = (7);

    var tab = [2, 3, 5];

    console.log(tab.length);
    console.log(tab[2]);

    // On ajoute un élément en fin de tableau
    tab.push(7);
    console.log(tab);
    tab[tab.length] = 12;
    console.log(tab);

    for(var i = 0; i < tab.length; i++){
        console.log(tab[i]);
    }

    // Boucle for simplifiée
    for(var elt of tab){
        console.log(elt);
    }

/************************************************************************************************************************************************************************************/
/****************************************************************** Opération sur les tableaux ********************************************************************/
/************************************************************************************************************************************************************************************/
    /*

                                                            - push() => Ajout d'un élément en fin de tableau
                                                            - pop() => supprime le dernier éléments
                                                            - shift() => supprime le premier élément
                                                            - unshift() => Ajoute un ou plusieurs éléments au début du tableau
                                                            - reverse() => Inverse les éléments
                                                            - sort() : trie le tableaux
                                                            - splice() => Extrait, ajout ou supprime un ou plusieurs éléments(selon les parmètres)
                                                            - include() : retourne true
                                                            - indexOf() : retourne la position de l'élément en paramètre (-1 sinon)
                                                            - slice() => Permet d'extraire un sous tableau à partir d'un tableau d'origine
                                                            - fill() => Permet d'initialiser ou modifier les valeurs d'un tableau ou une partie
                                                            - includes() => retourne true si la valeur saisie en paramètre est dans le tableau

    */

    var sports = ["foot", "tennis", "rugby", "basket", "volley"];

    var tab2 = sports.splice(2, 1, "tennis de table", "pétanque");

    console.log(sports);

    for(var elt of sports){
        console.log(elt);
    }
    console.log(tab2);

    var tab3 = sports.slice(1, 3);
    console.log(tab3);

    var tab4 = new Array(3).fill(0);
    console.log(tab4);

    var tab5 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    tab5.fill(9, 2, 5);
    console.log(tab5);

    tab5.unshift(4, 5, 123);
    console.log(tab5);

    var tab6 = [2, 5, 2, 4 ,3];
    var somme = 0;
    var produit = 1;
    for(var elt of tab6){
        produit *= elt;
        somme += elt;
    }
    console.log("La somme des éléments du tableau est : " + somme + ", et le produit est : " + produit + ".");


    // .forEach() => Parcourir un tableau
    // .map() => Appliquer une fonction à un tableau
    // .filter() => Filtrer les éléments d'un tableau selon un critère sous la forme d'une fonction anonyme ou flèchée
    // .reduce() => Réduire tous les éméments d'un tableau en un seul selon une règle définie sous la forme d'une fonction

    var tab7 = [2, 3, 5];
    tab7.map(x => x + 3)
        .filter(x => x > 5)
        .forEach(
            function(a, b){
                console.log(a - 3);
            }
        )

    var somme2 = tab7.map(x => x + 3)
        .filter(x => x > 5)
        .reduce(
            function(sum, elem){
            return sum + elem;
        }
        );
    console.log(somme2);
            
}
maFonfonction();

// FONCTIONS :
// ES5 = ECMASCRIPT Version 5
function somme(a, b){
    return console.log(a + b);
}

somme(1, 3);

// ES6

const addition = (a, b) => a + b;

var res = addition(1, 3);
console.log(res);

{
    var x = 10;
}
console.log("var " + x); // => x = 10
// ==> On peut utiliser x

{
    let x = 2;       // let a une portée limitée aux accollades
}
console.log("let " + x); // => x = 10
// ==> On ne peut pas utiliser x

let somme3 = new Function("a", "b", "return a + b");

let resultat = somme3(1, 5);

console.log(resultat);

function somme4(){
    let result = 0;
    for(var i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}
console.log(somme4(2, 4, 8, 9, 24, 65, 25));


