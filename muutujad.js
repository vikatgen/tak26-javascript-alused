/**
 * MUUTUJAD
 * Tarkvara hoiab meeles andmeid.
 * Andmete meeles hoidmiseks me kasutame muutujaid (koht vahemälus)
 * Anname nime, mille kaudu saame hiljem muutuja poole pöörduda.
 *
 * Muutujate loomiseks:
 * - Deklaratsioon
 *  - let
 *  - const
 * - Nimetamine
 *  - anname muutujale nime
 * - Omistamine (=)
 * - Väärtustamine - anname muutujale andmetüübi
 *
 * const > KONSTANT > ei muutu
 * let > muuutuva väärtusega
 *
 * Muutujate nimetamine käib camelCase standardi järgi.
 *
 */

let shoeSize = 40; // Number
const friendName = "Scooby Doo"; // String
let scoobyDooTeam = ["Shaggy", "Fred Jones", "Velma Dinkley", "Scooby Doo"]; // Array
let isScoobyDooAlive = true; // Boolean
let scoobyDooPhoneNumber; // Undefined
let scoobyDooArtificalIntelligence = null; // Objekt, õpime hiljem.

/**
 * Typeof operaatoriga saame kontrollida,
 * mis andmetüübiga me tegeleme
 * typeof muutujanimi
 */

console.log(typeof shoeSize);
console.log(typeof friendName);
console.log(typeof scoobyDooTeam);
console.log(typeof isScoobyDooAlive);
console.log(typeof scoobyDooArtificalIntelligence);
console.log(typeof scoobyDooPhoneNumber);





