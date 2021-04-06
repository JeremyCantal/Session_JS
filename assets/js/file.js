function maFonction() {
    // Box de confirmation
    // var bin =  confirm("Press a button !");

    // Box d'affichage avec une zone de saisie
    // var str = prompt("Votre nom", "John Nick");
    // alert(str);

    // Affichage en console

    // Débogger => afficher le contenu des variables
    // Tracer => vérifier les blocs du code visité
    console.log("Hello world !");

    /* var cl = console.log;
    cl("Hello world !"); */

    // Le mot-clé var récupère le type dynamiquement
    // var x = 5, y = 8;

    // Types de variable selon la valeur affectée

    // number
    // string
    // boolean
    // object
    // undefined

    // Affiche 'number'
    console.log(typeof 5.2);

    // Affiche 'boolean'
    console.log(typeof true);

    // Affiche 'string'
    console.log(typeof "bonjour");

    // Affiche 'undefined'
    // Le mot clé 'var' a une portée(scope) globale dans la page
    var x;
    console.log(typeof x);

    var y = 1;
    var z = "8";
    // Concaténation transformé en addition
    // parseInt : permet de convertir un sting en number
    console.log(y + parseInt(z));

    var u = "Bonjour ";
    var v = "tout le monde.";
    // Concaténation
    console.log(u + " " + v);

    // Affiche Nan (Not a Number)
    console.log(x + parseInt(u));


    a = 2;
    b = 0;
    console.log(a / b);

    // Post-incrémentation
    var i = 2;
    var j = i++;
    console.log(i); // 3
    console.log(j); // 2

    // Pré-incrémentation
    var i = 2;
    var j = ++i;
    console.log(i); // 3
    console.log(j); // 3

    // Utiliser 'eval' pour évaluer une
    // expression arithmétique sous forme
    // de chaîne de caractère.
    var str = "2 + 3 * 5";
    console.log(eval(str)); // Affiche '17'
/************************************************************************************************************************************************************************************/
/****************************************************************** Méthode utiles pour les chaînes de caractère ********************************************************************/
/************************************************************************************************************************************************************************************/

                                                                    // length : longueur de la chaîne
                                                                    // toUppercase : convertir en majuscule
                                                                    // tolowercase : convertir en minuscule
                                                                    // trim() : supprime les espaces au début
                                                                    // et à la fin
                                                                    // substr() : extrait une sous-chaîne de caratère
                                                                    // indexOf() : retourne la position d'une
                                                                    // sous-chaîne dans une chaîne,
                                                                    // -1 sinon (erreur)

    var str = "  bon jour  ";
    console.log(str.length); // Affiche 12

    var sansEspace = str.trim();
    console.log(sansEspace.length); // Affiche 8

    var str2 = "bonjour";
    // Extrait une sous chaîne à partir de l'indice 3
    console.log(str2.substr(3)); // Affiche 'jour'
    // Extrait une sous chaîne à partir de l'indice et jusu'à l'indice 2
    console.log(str2.substr(3, 2)); // Affiche 'jo'
    // Extrait une sous chaîne de 3 caractère en partant de la fin. 
    console.log(str2.substr(-3)); // Affiche 'our'
    // Extrait une sous chaîne de l'indice 1 à 3 (=> non inclu)
    console.log(str2.substring(1, 3)); // Affiche 'on'

    console.log(str2.indexOf("jour")); // Affiche 3
    console.log(str2.indexOf("soir")); // Affiche -1

    console.log(str2[1]); // Affiche 'o'
    console.log(str2.charAt(1));

    var today = new Date();
    var day = today.getDay();
    //var month = today.getMonth();
    console.log(day);
    var daylist = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", " samedi"];
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var prepand = (hour >= 12) ? " PM " : " AM ";
    console.log("Nous sommes " + daylist[day] + " et il est " + hour + " H " + minute + " min et " + second + " seconde(s)" + prepand);
    
    var x= 3;
    if(x > 0){
        console.log(x + " est strictement positif");
    }
    else if(x < 0){
        console.log(x + " est strictement négatif");
    }
    else{
        console.log(x + " est nul");
    }

    var x =5;
    switch(x){
        case 1:
            console.log("un");
            break;
        case 2:
            console.log("deux");
            break;
        case 3:
            console.log("trois");
            break;
        default:
            console.log("autre");
            
    }

    var day = today.getDay();
    switch(day){
        case 0:
            console.log("dimanche");
            break;
        case 1:
            console.log("lundi");
            break;
        case 2:
            console.log("mardi");
            break;
        case 3:
            console.log("mercredi");
            break;
        case 4:
            console.log("jeudi");
            break;
        case 5:
            console.log("vendredi");
            break;
        case 6:
            console.log("samedi");
            break;
        default:
            console.log("autre");
            
    }

    var str = "orange";
    switch(str){
        case "banane":
            console.log("Prix : 2");
            break;
        case "abricot":
            console.log("Prix : 2.5");
            break;
        case "durian":
            console.log("Prix : 12");
            break;
        case "pomme":
            console.log("Prix : 1");
            break;
        case "passion":
            console.log("Prix : 5");
            break;
        case "fraise":
            console.log("Prix : 4");
            break;
        case "orange":
            console.log("Prix : 1.5");
            break;
        default:
            console.log("autre");
    }
    var i = 0
    while(i < 5){
        console.log(i)
        i++
    }
    var j = 0;
    do {
        console.log(j);
        j++;
    } while(j < 5)

    
    for(var k = 0; k <= 10; k++){
        if(k % 2 == 0){
            console.log(k);
        }
    }

    var temp = 34;
    var seuil = 34;
    if(temp < seuil){
        console.log("Température OK : " + temp + " °C.");
    }
    else if(temp == seuil){
        console.log("La température à atteint le seuil : " + temp + " °C.");
    }
    else{
        console.log("Alerte, le seuil est dépassé! ==> " + temp + " °C.");
    }


    for(var ind = 1; ind <= 100; ind++){
        if(ind % 3 == 0 && ind % 5 ==0){
            console.log("FizzBuzz")
        }
        else if(ind % 3 == 0){
            console.log("Fizz");
        }
        else if(ind % 5 == 0){
            console.log("Buzz");
        }
        else{
            console.log(ind);
        }
    }
    var str = "";
    for(var i = 0; i < 5; i++){
            str += "*";
            console.log(str);
        }

    
            
}
maFonction();

// var nbr1 = prompt("Saisir un nombre", "0");
    
// var nbr2 = prompt("Saisir un second nombre", "0");

// if(nbr1 > nbr2){
//     console.log("Le plus grand nombre est : " + nbr1);
// }
// else if(nbr1 == nbr2){
//     console.log("Les deux nombres sont égaux.");
// }
// else{
//     console.log("Le plus grand nombre est : " + nbr2);
// }



