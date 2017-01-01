for (i = 0; i < 10; i++){
    if (i % 2 == 0) {
        console.log("i의 값은?", i);
    }
}

var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}

console.log(text)