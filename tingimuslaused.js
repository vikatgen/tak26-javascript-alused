/**
 * TINGIMUSLAUSED
 *
 * Nagu nimetus ütleb on siis vaja kontrollida tingimust.
 * "KUI sa oma toa ära koristad, VÕID arvutis mängida."
 * Tingimus > toa ära koristamine
 * Tegevus > arvutiga mängimine
 *
 * == - võrdlen kahe poole väärtusi ehk kas 25 on 25 > "25" on 25
 * === - võrdlen väärtusi ja andmetüüpe
 *
 */

const currentYear = 2026;

if (currentYear > 2020) {
    console.log("Covid on möödas")
} else {
    console.log("Covid alles tuleb")
}

if (currentYear > 2020) {
    console.log("Covid on möödas")
} else if (currentYear === 2020) {
    console.log("Covid on kohal")
} else {
    console.log("Covid alles tuleb")
}