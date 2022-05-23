// Benötigt wird, individuelles Körpergewicht in KG
// Körpergröße in cm
// Alter in Jahren

// sowohl für Mann als auch für Frau

// Ergebnis muss in  Kilokalorien ausgegeben werden.

// Um den GESAMTUMSATZ ausrechnen zu können, wird der PAL_Faktor benötigt, welcher mit dem GRUNDUMSATZ multipliziert wird.


let cm = document.getElementById("cm");
let age = document.getElementById("age");
let kg = document.getElementById("kg");
let hours = document.getElementById("hours");
let output = document.getElementById("output");


let submit = () => {
    if (men.checked) {
        let kgMen = 13.7 * kg.value;
        let cmMen = 5 * cm.value;
        let ageMen = 6.8 * age.value;
        output.innerHTML = 664.7 + kgMen + cmMen - ageMen + " kcal ";
    }
    if (woman.checked) {
        let kgWoman = 664.7 + (13.7 * kg.value);
        let cmWoman = 5 * cm.value;
        let ageWoman = 6.8 * age.value;
        output.innerHTML = 664.7 + kgWoman + cmWoman - ageWoman + " kcal ";
    }
}

// PAL-Faktor: Aktivttät soll * die Stunde(n) berechnet werden


/* let pal1 = document.getElementById("1");   //schauen ob ich diese Deklarationen benötige
let pal2 = document.getElementById("2");
let pal3 = document.getElementsById("3");
let pal4 = document.getElementsById("4");
let pal5 = document.getElementById("5");
let pal6 = document.getElementById("6");

*/

let completePAL = [0.95, 1.2, 1.5, 1.7, 1.9, 2.2];



let onchange = () => {
    if ([0]) {
        let combi = hours * completePAL;
    }
    output.innerHTML = combi;
}







