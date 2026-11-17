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

for(let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);
};