/**
 * Korduslaused > tsükkel > loopimine
 * - Ühe ja sama tegevuse kordamine teatud arv kordi
 * - tsükli loomiseks on vaja andmetüüpi, mida saab loopida
 * - for tsükkel koosneb kolmest parameetrist
 *  - tsüklimuutuja (let index = 0)
 *  - tingimus (millal loop lõppeb)
 *  - tsüklimuutuja muutmine
 */

const fruits = ["banana", "apple", "pear", "peach", "orange"];
const name = "Gen Vikat"; // String
const age = 50; // Number
const isTeacher = true; // Boolean


console.log("For loop ....")
for(let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);
};

console.log("forEach loop ....");
fruits.forEach((fruit) => {
    console.log(fruit.toUpperCase());
});

