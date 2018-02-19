//
// Object Destructuring
//

// const person = {
//   name: 'Caner',
//   age: 31,
//   location: {
//     city: 'Los Angeles',
//     temp: 99
//   }
// }

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age} years old`);

// const {city, temp: tempreature} = person.location;
// console.log(`Tempreature of ${city} is ${tempreature}`);

const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-published' } = book.publisher;
console.log(publisherName);

//
// Array Destructuring
//

// const address = ['11520 Mayfield Ave', 'Los Angeles', 'California', '90049'];
// const [street, city, state = 'Arizona' , zip] = address;

// console.log(`My home address is ${street}, ${city}, ${zip}, ${state}`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice = '$5.00'] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
