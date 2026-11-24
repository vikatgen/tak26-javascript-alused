/**
 * FUNKTSIOONID
 *
 * Arendaja poolt paika pandud reeglite järgi sisendi manipuleerimine.
 * Funktsioon koosneb function võtmesõnast, parameetritest ja tagastusest.
 *
 * Kui me tahame midagi funktsioonist tagastada, siis kasutame return võtmesõna
 * Parameeter on placeholder, millele saame anda väärtuse väljaspool funktsiooni.
 *
 * Funktsiooni luues ta automaatselt tööle ei lähe
 * Tööle panemiseks peame funktsiooni nimepidi välja kutsuma.
 *
 * Funtsioonide ülesse saab kirjutada DocStringi
 * DocString annab IDE-le teada, mida funktsioon teeb,
 * mis on ta parameetrid ja mida ta tagastab
 */

/**
 * Funktsioon arvutab sisendi põhjal vanuse.
 * @param birthYear
 * @returns {number}
 */
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
};

console.log(calculateAge(2009));


let ourGrades = [5, 3, 4, 4, 5];

/**
 * Keskmise hinde arvutamine
 * @param grades Array hinnetest
 * @returns {number} tagastab keskmise hinde
 */
function averageGrade(grades) {
    let total = 0;
    grades.forEach((grade) => {
        total = total + grade;
    });
    return total / grades.length;
};

console.log(averageGrade(ourGrades));

// kahe liidetava summa
function calculateSumOfTwo(num1, num2) {
    return num1 + num2;
};

console.log(calculateSumOfTwo(10, -23));

// kahe lahutatava summa
function calculateSubOfTwo(num1, num2) {
    return num1 - num2;
};

console.log(calculateSubOfTwo(5, 2));



