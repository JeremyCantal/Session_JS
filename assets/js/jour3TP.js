// // TP1 Jour3 :

// // Exercice 1 :  Tirage au sort des noms:

// var tabNoms = [];

// function Ajouter_nom(nom){
//     console.log("Le bouton 'Ajouter nom' a été cliqué");

//     var nom = prompt("Quel nom souhaitez-vous ajouter ?", "");
//     while(nom == false || tabNoms.includes(nom)){
//         console.log("Ce nom est déjà utilisé ou n'est pas valide. Entrez à nouveau un nom : ");
        
//         nom = prompt("Quel nom souhaitez-vous ajouter ?", "")
//     }
//     tabNoms.push(nom);
//     alert("Vous avez ajouté " + nom + " à votre tableau.");
//     console.log("Le nom \'" + nom + "\' a été ajouté avec succès.");
//     console.log(tabNoms);
    
// }

// function RandomName(){
//     var gagnant = Math.floor(Math.random() * tabNoms.length);
    
//     return console.log("Le grand gagnant est " + tabNoms[gagnant] + ", FELLICITATIONS !");
// }

// // Correction :

//     const tirage = () => {
//         var rand = Math.floor(Math.random() * tabNoms.length);
//         tabNoms.length > 0 ? alert("Le grand gagnant est " + tabNoms[rand] + ", FELLICITATIONS !") :
//         alert("Veuillez entrer un nom : ");
//     }

// // Exercice 2 :

//     var student = {
//         name: "David Rayy",
//         class: "VI",
//         rollno: 12
//     };
//     console.log("Tu t'appelles " + student.name + ", tu es dans la classe " + student.class + ", ton rollno est le " + student.rollno);
//     delete student.rollno;
//     console.log("Tu t'appelles " + student.name + ", tu es dans la classe " + student.class + ", ton rollno est le " + student.rollno);


// // Exercice 3 :

// class Recette{
//     nom;
//     service;
//     ingredients;
//     constructor(nom, service, ingredients){
//         this.nom = nom;
//         this.service = service;
//         this.ingredients = ingredients;
//     }
// }

// recette1 = new Recette("Rosbeef", 6, ["Boeuf", "Aie", "Oignons", "Pomme de terre", "Crème", "Roquefort"]);

//     console.log("Recette : " + recette1.nom);
//     console.log(" Pour " + recette1.service + " personnes.");
//     for(let elt of recette1.ingredients){
//         console.log("- " + recette1.ingredients[elt]);
//     }


// // Exercice 4 :


// var library = [
//     {
//         title: 'TheRoadAhead',
//         author:'BillGates',
//         libraryID:1254
//     },
//     {   
//         title: 'WalterIsaacson',
//         author:'SteveJobs',
//         libraryID:4264
//     },
//     {
//         title: 'Mockingjay:TheFinalBookofTheHungerGames',
//         author:'SuzanneCollins',
//         libraryID:3245
//     }
// ];
//     for(let elt of library){
//         console.log("L'ouvrage : " + elt.title + " a été écrit par " + elt.author + " et son ID est le " + elt.libraryID);
//     }

//     // Correction

//         library.forEach(a => {
//             var book = " " + a.title + "'" + ' by ' + a.author + ".";
//             a.readingStatus ? console.log("already read " + book) :
//             console.log("You steal need to read " + book);
//         })

// Exercice 5 :

    // Partie 1 :

/******************************************************************** GUERRIER ************************************************************************/

    class Guerrier{
        nom;
        valAtt;
        valDef;
        valLife;
        valMana;
        constructor(nom, valAtt, valDef, valLife){
            this.nom = nom;
            this.valAtt = valAtt;
            this.valDef = valDef;
            this.valLife = valLife;
            this.valMana = 'undefined';
        }
        getAll(){
            return console.log("Champion : " + this.nom + " - Attaque : " + this.valAtt + " - Défense : " + this.valDef + " - PV : " + this.valLife);
        }
        getNom(){
            return console.log("Champion : " + this.nom);
        }
        setNom(nom){
            this.nom = nom;
        }
        getValAtt(){
            return console.log(" - Attaque : " + this.valAtt);
        }
        setValAtt(valAtt){
            this.valAtt = valAtt;
        }
        getValDef(){
            return console.log(" - Défense : " + this.valDef);
        }
        setValDef(valDef){
            this.valDef = valDef;
        }
        getValLife(){
            return console.log(" - PV : " + this.valLife);
        }
        setValLife(valLife){
            this.valLife = valLife;
        }
    }

/******************************************************************** MAGICIEN ************************************************************************/

    class Magicien{
        nom;
        valAtt;
        valDef;
        valLife;
        valMana;
        constructor(nom, valAtt, valDef, valLife, valMana){
            this.nom = nom;
            this.valAtt = valAtt;
            this.valDef = valDef;
            this.valLife = valLife;
            this.valMana = valMana;
        }
        getAll(){
            return console.log("Champion : " + this.nom + " - Attaque : " + this.valAtt + " - Défense : " + this.valDef + " - PV : " + this.valLife + " - Mana : " + this.valMana);
    }
        getNom(){
            return console.log("Champion : " + this.nom);
        }
        setNom(nom){
            this.nom = nom;
        }
        getValAtt(){
            return console.log(" - Attaque : " + this.valAtt);
        }
        setValAtt(valAtt){
            this.valAtt = valAtt;
        }
        getValDef(){
            return console.log(" - Défense : " + this.valDef);
        }
        setValDef(valDef){
            this.valDef = valDef;
        }
        getValLife(){
            return console.log(" - PV : " + this.valLife);
        }
        setValLife(valLife){
            this.valLife = valLife;
        }
        getValMana(){
            return console.log(" - Mana : " + this.valMana);
        }
        setValMana(valMana){
            this.valMana = valMana;
        }
    }




/******************************************************************** ACTIONS ************************************************************************/

    // Récupérer de la santé :

    class Heal {
        healer;
        constructor(healer){
            this.healer = healer;
            function seSoigner(mana, life){
                mana = healer.valMana;
                life = healer.valLife;
                if(healer.valMana < 10){
                    return console.log(healer.nom + " n'a pas assez de mana pour se soigner. => Solde : " + healer.valMana + ".");
                }
                else{
                    healer.setValMana(mana - 10);
                    healer.setValLife(life + 10);
                    return console.log("La santé de " + healer.nom + " est maintenant à " + healer.valLife + " PV et son mana est maintenant à : " + healer.valMana + ".");
                }
            }
            seSoigner(healer.valMana, healer.valLife);
        }

    }

    // Récupérer de la mana :

    class RegenMana {
        user;
        constructor(user){
            this.user = user;
            function recupMana(mana, life){
                mana = user.valMana;
                life = user.valLife;
                if(user.valLife <= 100){
                    return console.log(user.nom + " n'a pas assez de PV pour récupérer de la mana. => Solde : " + user.valLife + ".");
                }
                else{
                    user.setValLife(life - 100);
                    user.setValMana(mana + 8000);
                    return console.log("La mana de " + user.nom + " est maintenant à " + user.valMana + " et ses PV s'élèvent maintenant à : " + user.valLife + ".");
                }
            }
            recupMana(user.valMana, user.valLife);
        }

    }

    // Attaquer un autre personnage :

    class Combat {
        attaquant;
        attaque;
        constructor(attaquant, attaque){

            this.attaquant = attaquant;
            this.attaque = attaque;
        
            function attaquer(att, def, life, mana){
                // Données attaquant
                att = attaquant.valAtt;
                mana = attaquant.valMana;
                // Données attaqué
                def = attaque.valDef;
                life = attaque.valLife;

                var deg = att - (att * def / 100);
                var nouvMana = mana - (100);
                
                // Si l'attaquant est un Magicien :

                if(attaquant.valMana !== 'undefined' ){
                    if((att / 2) > mana){
                        return console.log(attaquant.nom + " n'a pas assez de mana pour attaquer. => Solde : " + attaquant.valMana + ".");
                    }
                    else{
                        console.log("L'attaque de " + attaquant.nom + " a fait " + deg + " points de dégâts d'attaque à " + attaque.nom + ".");
                        console.log(attaquant.nom + " perd " + (att / 2) + " de mana. Nouveau solde de mana : " + nouvMana + ".");
                        attaque.setValLife(life - deg);
                        attaquant.setValMana(nouvMana);
                        if(attaque.valLife <= 0){
                            console.log(attaquant.nom + " a tué " + attaque.nom + " :'( ");
                        }
                    }
                }

                // Si l'attaquant est un Guerrier :

                else{
                    console.log("L'attaque de " + attaquant.nom + " a fait " + deg + " points de dégâts d'attaque à " + attaque.nom + ".");
                    attaque.setValLife(life - deg);
                    if(attaque.valLife <= 0){
                        console.log(attaquant.nom + " a tué " + attaque.nom + " :'( ");
                    }
                }
            }
            attaquer(attaquant.valAtt, attaque.valDef, attaque.valLife, attaquant.valMana);
        }
        
    }
    // Nouveaux objets Guerrier :

    perso1 = new Guerrier("Aragorn fils d'Aratorn, descendant d'Isildur", 120, 12, 12000);
    perso2 = new Guerrier("Boromir fils de Denetor II ,intendant du Gondor", 130, 11, 12300);
    perso3 = new Guerrier("Garen", 115, 15, 11500);
    perso4 = new Guerrier("Renekton", 135, 12, 10000);
    perso5 = new Guerrier("Shen", 105, 10, 13500);

    // Nouveaux objets Magicien :

    perso6 = new Magicien("Sarouman le blanc", 16000, 12, 289, 50);
    perso7 = new Magicien("Syndra", 255, 11, 2200, 254);
    perso8 = new Magicien("Orianna", 310, 5, 1200, 310);
    perso9 = new Magicien("Leblanc", 290, 2, 1500, 291);
    perso10 = new Magicien("Velkoz", 270, 8, 1800, 267);

    /******************************************************************************** PLACE AU COMBAT ***********************************************************************/

    // Attaque Guerrier 1 :
    console.log("Attaque 1 : ");
    console.log("");
    console.log("Infos avant attaque - PV de " + perso6.nom + " : " + perso6.valLife + ".");
    var attaque1 = new Combat(perso1, perso6);
    console.log("Nouveau PV de " + perso6.nom + " : " + perso6.valLife + ".");
    console.log("");
    
    // Attaque Guerrier 2 :
    console.log("Attaque 2 : ");
    console.log("");
    console.log("Infos avant attaque - PV de " + perso6.nom + " : " + perso6.valLife + ".");
    var attaque2 = new Combat(perso5, perso6);
    console.log("Nouveau PV de " + perso6.nom + " : " + perso6.valLife + ".");
    console.log("");

    // Heal Magicien 1 :
    console.log("Tentative de heal : ");
    console.log("");
    console.log("Infos avant le heal : " + perso6.nom + " - PV : " + perso6.valLife + " - Mana : " + perso6.valMana + ".");
    var heal1 = new Heal(perso6);
    console.log("");

    // Attaque Magicien 1 :
    console.log("Attaque 3 : ");
    console.log("");
    console.log("Infos avant attaque - PV de " + perso1.nom + " : " + perso1.valLife + ".");
    var attaque2 = new Combat(perso6, perso1);
    console.log("Nouveau PV de " + perso1.nom + " : " + perso1.valLife + ".");
    console.log("Nouveau mana de " + perso6.nom + " : " + perso6.valMana + ".");
    console.log("");

    // Récupération mana Magicien :
    console.log("Récupération de mana 1 : ");
    console.log("");
    console.log("Infos avant la récup : " + perso6.nom + " - PV : " + perso6.valLife + " - Mana : " + perso6.valMana + ".");
    var recupMana1 = new RegenMana(perso6);
    console.log("Nouveau PV de " + perso6.nom + " : " + perso6.valLife + ".");
    console.log("Nouveau mana de " + perso6.nom + " : " + perso6.valMana + ".");

    // Attaque Magicien 2 :
    console.log("Attaque 4 : ");
    console.log("");
    console.log("Infos avant attaque - PV de " + perso2.nom + " : " + perso2.valLife + ".");
    var attaque2 = new Combat(perso6, perso2);
    console.log("Nouveau PV de " + perso2.nom + " : " + perso2.valLife + ".");
    console.log("Nouveau mana de " + perso6.nom + " : " + perso6.valMana + ".");
    console.log("");
   
    // Attaque Guerrier 3 :
    console.log("Attaque 5 : ");
    console.log("");
    console.log("Infos avant attaque - PV de " + perso6.nom + " : " + perso6.valLife + ".");
    var attaque1 = new Combat(perso1, perso6);
    console.log("Nouveau PV de " + perso6.nom + " : " + perso6.valLife + ".");
    console.log("");










