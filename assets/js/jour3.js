// Asynchrone ==> callback, promesses, mots clés : async/await

function direBonjour(msg, callback){
    var message = "Bienvenue " + msg;
    callback(message);
}

function afficheMessage(msg){
    console.log(msg);
}

direBonjour("Tout le monde !", afficheMessage);

function somme(a, b){
    return a + b;
}

function produit(a, b){
    return a * b;
}

function operation(a, b, callback) {
    console.log(callback(a, b));
}
operation(3, 5, somme);

function hello(){
    console.log("Hello");
}
function sayHelloAfterXSeconds(x){
    timeout = setTimeout(hello, x * 1000);
}

sayHelloAfterXSeconds(5);

clearTimeout(timeout); // Hello ne sera jamais affiché

var interval;
function sayHelloEveryXSeconds(x){
    interval = setInterval(hello, x * 1000);
}
sayHelloEveryXSeconds(2);

clearInterval(interval);