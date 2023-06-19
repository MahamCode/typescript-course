"use strict";
function logAnything(arg) {
    console.log(arg);
    return arg;
}
logAnything('a');
logAnything([1, 2]);
function logAnythingWithGenerics(arg) {
    console.log(arg);
    return arg;
}
logAnythingWithGenerics([1, 2]);
function getOldest(people) {
    console.log(people.sort((a, b) => b.age - a.age)[0]);
    return people.sort((a, b) => b.age - a.age)[0];
}
const people = [{ age: 30 }, { age: 40 }, { age: 10 }];
getOldest(people);
getOldest(people).age;
const players = [
    { name: 'maham', age: 22 },
    { name: 'sheeza', age: 20 },
];
const person = getOldest(players);
person.name;
console.log(person.name);
function getOldestGeneric(people) {
    console.log(people.sort((a, b) => b.age - a.age)[0]);
    return people.sort((a, b) => b.age - a.age)[0];
}
const personGeneric = getOldestGeneric(players);
personGeneric.name;
console.log(personGeneric.name);
//# sourceMappingURL=generics.js.map