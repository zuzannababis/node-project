const fs = require('fs');

const genders = [
  'male',
  'female'
];

const maleNames = [
  'Jędrzej',
  'Bogusław',
  'Mariusz',
  'Paweł',
  'Mateusz',
  'Piotr',
  'Michał',
  'Robert',
  'Leon'
];

const femaleNames = [
  'Katarzyna',
  'Natalia',
  'Aleksandra',
  'Zofia',
  'Małgorzata',
  'Alicja',
  'Julia',
  'Luiza',
  'Magdalena'
];

const lastNames = [
  'Babis',
  'Skierka',
  'Sęk',
  'Domagała',
  'Czuba',
  'Lelas',
  'Budek'
];

const randChoice = arr => arr[Math.floor(Math.random() * arr.length)];

const people = [];

for(let i=0; i <= 20; i++){
  const person = {};

  person.gender = randChoice(genders);

  let pickName = () => {
    if(person.gender === "male") {
      return randChoice(maleNames);
    } else {
      return randChoice(femaleNames);
    }
  };

  person.name = pickName();

  person.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  person.age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;

  people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('File has been successfully generated! Check people.json');
});
