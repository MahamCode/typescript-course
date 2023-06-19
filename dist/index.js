"use strict";
var _a;
let sales = 123456798;
let course = 'TypeScript';
let is_published = true;
let level;
let numbers = [1, 2, 3];
numbers[3] = 4;
numbers.forEach(n => n);
let user = [1, 'Maham'];
let mySize = 1;
console.log(mySize);
function calculateTaxGoodPractice(income) {
    if (income < 50000)
        return income * 1.2;
    return 0;
}
function calculateTax2(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax2(10000, 2022);
let employee = { id: 0, name: '' };
employee.id = 1;
let employeee = {
    id: 0,
    name: '',
    retire: (date) => {
        console.log(date);
    }
};
let employeeObject = {
    id: 0,
    name: '',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else {
        console.log('Name not Found!');
    }
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index.js.map