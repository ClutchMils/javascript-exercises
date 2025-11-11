const findTheOldest = function(array) {
let currentYear = new Date().getFullYear();
let oldestPerson = array.reduce((oldest, person) => {
    let deathYear = person.yearOfDeath ? person.yearOfDeath : currentYear;
    let age = deathYear - person.yearOfBirth;
    let oldestDeathYear = oldest.yearOfDeath ? oldest.yearOfDeath : currentYear;
    let oldestAge = oldestDeathYear - oldest.yearOfBirth;
    return age > oldestAge ? person : oldest;
});
return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
