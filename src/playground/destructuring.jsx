import _ from 'lodash';

// Object Destrcucturing

// const person = {
//     // name: 'Ivan',
//     age: 25,
//     location: {
//         city: 'Krasnoyarsk',
//         temp: -36,
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: t } = person.location;

// if ( _.isString(city) && _.isNumber(t))
//     console.log(`It's ${t} in ${city}`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: { 
        name: 'Penguin' 
    }
};

const { name: publisherName = 'self-published' } = book.publisher;

console.log(publisherName);

// Array destructuring

const address = ['76zh Svobodny Prospect', 'Krasnoyarsk', 'Krasnoyarsk Kray', '660041', 'Russia'];
const [ , city, state = 'Oblast', ] = address;
console.log(`UR in ${city} ${state}`);
