

// Objet

// C'est un ensemble 
// - d'attributs (variables, champs) : clé + valeur
// - de méthodes : fonctions

// Un ogjet est caractérisé par des accolades

var obj = {
    nom: "Wick",
    prenom: "John"
};

// Récupère l'attribut nom de l'objet obj et l'affiche en console

console.log(obj.nom);
// ou 
console.log(obj["prenom"]);

// Un objet est itérable à l'aide de 'for...in...'
for(var elt in obj){
    console.log(elt + " : " + obj[elt]);
}

// On crée une nouvelle instance 'obj' de type Object
var obj = new Object();
obj.nom = "Taykhan";
obj.prenom = "Lucas";

// On copie un objet
var obj2 = {...obj};    // remplacer 'obj' par 
                        // spread operator ('{...obj}') rendent
                        // les 2 objets indépendants

var obj3 = Object.assign({}, obj);
obj3.prenom = "Elo";
obj2.nom = "Gabin"; // Donc ne Modifie pas l'instance obj
console.log("obj : " + obj.nom + " " + obj.prenom);
console.log("obj2 : " + obj2.nom + " " + obj2.prenom);
console.log("obj3 : " + obj3.prenom);

// function dog(name){
//     this.name = name;
// }
// const dog = new dog("Rex");
// console.log();

// Pour transformer un objet en chaîne de caractère

var str = JSON.stringify(obj2);
console.log(str);

var p = JSON.parse(str);
console.log(p.nom + " " + p.prenom);

// Ajout d'un méthode dans l'objet obj
var obj = {
    nom: "Wick",
    prenom: "John",
    direBonjour: function(){
        console.log("Bonjour " + this.nom + " " + this.prenom);
    }
};

// Appel de la méthode direBonjour,
// à partir de obj de type Object
obj.direBonjour();

// Constructeurs

// Moule pour créer des objets
// Tous les objets sont de type Object
// Et sin on veut créer un model d'objet,
// on peut utiliser les constructeurs

var Personne = function(nom, prenom, age){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
}

//                   OU     

class Personnes{
    nom;
    prenom;
    age;
    constructor(nom, prenom, age){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    getNom(){
        return this.nom;
    }
    setNom(nom){
        this.nom = nom;
    }
    getPrenom(){
        return this.prenom;
    }
    setPrenom(prenom){
        this.prenom = prenom;
    }
    getAge(){
        return this.age;
    }
    setAge(age){
        this.age = age;
    }

    afficherNomComplet(){
        return this.nom + " " + this.prenom;

    }
}

perso = new Personne("Gabin", "Lucas", 4);
console.log(perso.nom + " " + perso.prenom + ", " + perso.age + " ans.");

perso2 = new Personnes("Binou", "Elod", 29);
perso2.setNom("Lulu");
perso2.setPrenom("Bibi");
console.log(perso2.getNom() + " " + perso2.getPrenom() + ", " + perso2.getAge());

// Erreur, impossible de lui ajouter un nouvel attributde cette façon
// Personne.rue = "hjjjh";

// Utiliser le prototype
Personne.prototype.rue = 0;

// Mise en place du Getter
Personne.prototype.getRue = function (){
    return this.rue;
}

// Mise en place du Setter
Personne.prototype.setRue = function (rue){
    this.rue = rue;
}
perso.setRue("place du Grand-Ouest");
console.log(perso.getRue());


let array1 = ['h', 'e', 'y'];
let array2 = [...array1];
console.log(array2);


let baked_desserts = ['cake', 'cookie', 'donut', 'cheescake', 'tarte'];

let desserts = ['icecream', 'flan', 'frozen yoghurt', ...baked_desserts];
console.log(desserts);

let desserts2 = ['icecream', 'flan', ...baked_desserts, 'frozen yoghurt'];
console.log(desserts2);

function multiply(number1, number2, number3){
    console.log(number1 * number2 * number3);
}

let numbers = [1, 2, 3];
multiply(...numbers);

let numbers2 = [1, 2, 300, -1, 0, -100];

console.log(Math.min(...numbers2)); // ==> si pas '...', retourne 'NaN(Not a Number)
console.log(Math.max(...numbers2));







