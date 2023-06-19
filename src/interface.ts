interface Transaction {
    payerAccount: number;
    payeeAccount: number;
}
interface BankAccount {
    accountNumber: number;
    transactions: Transaction[];
}

const transaction1: Transaction = {
    payerAccount: 123,
    payeeAccount: 456
}
const transaction2: Transaction = {
    payerAccount: 234,
    payeeAccount: 987
}
const bankAccount: BankAccount = {
    accountNumber: 123,
    transactions: [transaction1, transaction2]
}

//we can make parent interface too like
interface Parent {
    //
}
interface Child extends Parent {
    //it will contain all the properties of Parent
}

//we can also do Merging, where we can merge 2 interfaces, mostly useable in libraries
interface Book {
    name: string;
}
//if we want to add one more property then
interface Book {
    size: number;
}
const book: Book = {
    name: 'Book',
    size: 50
}
//we cannot do this merging in type alias