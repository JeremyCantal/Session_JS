// 1)

    let arr = [12, 56, 2, 458, 45, 5, 36, 94, 17, 52, 46];

    function premEltTab(tab){
        return console.log("La première val du tableau est : " + tab[0]);
    }
    premEltTab(arr);

    function ageEnJour(a){
        return console.log("L'âge en jour est : " + a * 365);
    }
    ageEnJour(31);

// 2)

    function minEnSec(a){
        return console.log("Il y a " + a * 60 + " secondes dans " + a + " minutes.");
    }
    minEnSec(60);

// 3)

    let tab1 = [2, 5, 2];
    function sommeEtProduit(tab){
        let somme = 0;
        let produit = 1;
        for(let i = 0; i < tab.length; i++){
            somme += tab[i];
            produit *= tab[i];
        }
        return console.log("La somme est : " + somme + ", le produit est : " + produit + ".");
    }
    sommeEtProduit(tab1);

// 5)
    
