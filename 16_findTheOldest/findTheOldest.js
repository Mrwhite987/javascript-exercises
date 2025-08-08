const findTheOldest = function (people) {
  people.forEach((person) => {
    if (person.yearOfDeath === undefined) {
      person.yearOfDeath = new Date().getFullYear();
    }
  });
  people.sort(compareAge);
  return people[0];
};

function compareAge(person1, person2) {
  return (
    person2.yearOfDeath -
    person2.yearOfBirth -
    (person1.yearOfDeath - person1.yearOfBirth)
  );
}

// Do not edit below this line
module.exports = findTheOldest;
