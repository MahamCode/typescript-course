//Built-in Variables
  let sales = 123_456_798; //we can remove the annotation of :number 
  let course = 'TypeScript'
  let is_published = true;


//Any Type
  let level;
  // function readDoc(document) {
  //   /*if you turn off this: "noImplicitAny": true, then the compiler error of implicit any type on parameter will go away but doing this, you can lose major benefit of typescrit     */     
  //   console.log(document)
  // }

//Array
  let numbers: number[] = [1,2,3]
  numbers[3] = 4;
  numbers.forEach(n => n) //here at the end by writing n. we can see all the available options in typescript

//Tuples
  //fixed length array where each element has a particular type
  //we often use them when working with a pair of values
  let user: [number, string] = [1, 'Maham'];
  //after user[0]. --> you can see all the methods of number object
  //and after writing user[1]. --> you can see all the properties and methods of string objects
  //tuples are usefull when we have 2 values like key, value pairs

//Enums
  //Represents a list of related contansts 
  //Pascal Case
  const enum Size { //by using const, compiler will generate more optimize code
    Small,
    Medium,
    Large
  }
  // enum Size {
  //   Small = 's',
  //   Medium ='m',
  //   Large = 'l'
  // }
  // enum Size {
  //   Small = 1,
  //   Medium,
  //   Large
  // }
  let mySize: Size = Size.Medium;
  console.log(mySize) //to check this execute js file 
  //tsc
  //node dist/index.js

//Functions
  /* function calculateTax(income: number) {
      return 0;
    } //in above, the return value should be properly annotated so,
  */
  //uncomment the noUnusedParameters in tsconfig.json file, then you can see the warning of unUsedParameters
  function calculateTaxGoodPractice(income: number): number {
    if (income < 50_000)
      return income *1.2;
    return 0
  }
  /* 
  function calculateTax2(income: number) {
    if (income < 50_000)
      return income *1.2;
    //js bydefault always return undefined from our functions
    //but it will generate bug, to avoid this
    //we can turn on the noImplicitReturns from settings
  }
  */
  //So, change it to 
  function calculateTax2(income: number, taxYear: number): number {
    //let x; //turn on the noUnusedLocals, then it will show the error, if we will not use it
    if (taxYear < 2022)
      return income *1.2;
    return income * 1.3;
  }
  calculateTax2(10_000, 2022);
  /* 
  function calculateTax2(income: number, taxYear?: number): number {
    if ((taxYear || 2022) < 2022)//it is in case if taxYear is undefined
      return income *1.2;
    return income * 1.3;
  }
  calculateTax2(10_000); //working fine because in above taxYear is optional because I'm adding ? 
  or----------------------------------
  function calculateTax2(income: number, taxYear = 2022): number {
    if (taxYear < 2022)//it is in case if taxYear is undefined
      return income *1.2;
    return income * 1.3;

  calculateTax2(10_000, 2023); //2023 will override the 2022 in above function
  */

//Objects
  //In JS, objects are dynamic, so their shape can change throughout the lifetime
  //like
  /*
  let employee = {id: 0};
  */
  //But the typescript compiler has inferred the shape of the employee object, and gives an error on employee.name line
  //so,
  // let employee: {
  //   id: number,
  //   name?: string,
  // }= {id: 0};
  // employee.name = 'Maham';
  //IN above, the code is not conceptually makes sense, becuase every employee have name, that is why change it to:
let employee: {
  id: number,
  name: string,
}= {id: 0, name: ''};
employee.id = 1; // we can change it, but to avoid this, make the id read only like:
let employeee: {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}= {
    id: 0, 
    name: '',
    retire: (date: Date) => {
      console.log(date)
    }
  };

//Type Aliases
  //In the above employeee object, we should follow the principle of DRY (don't repeat yourself), second problem is: may be the another employeee object have other properties, so these 2 employee objects might not have a consistent shape, because we donot have a single place to define the shape of an employee object, and code structure is also hard to understand
  //So,using type aliases, allow us to use custome type like
  type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
  }
 let employeeObject: Employee= {
    id: 0, 
    name: '',
    retire: (date: Date) => {
      console.log(date)
    }
  }; //Now we can use this Employee type on multiple places

//Union Types
  //Use in case of:  ether this or this
  // | represents union
  function kgToLbs(weight: number | string): number {
    //If I do weight. -->then I see the methods that are in both, the numbers and the strings, to check only number methods, there is need to use Narrowing technique So,
    if(typeof weight === 'number')
      //weight.
      return weight * 2.2;
    else
      return parseInt(weight) * 2.2
  }
  kgToLbs(10)
  kgToLbs('10kg')

//Intersection Types
  // this type represents an object that is both a number and a string at the same time
  // & represents union
  type Draggable = {
    drag: () => void
  };
  type  Resizable = {
    resize: () => void
  }
  type UIWidget = Draggable & Resizable;
  let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
  }

//Literal Types
  //Sometimes we want to limit the values that we are assigning to a variable, this is where, we use literal types
  //Literal (exact, specific)
  type Quantity = 50 | 100; //this is called a literal type have specific values
  let quantity: Quantity = 100;

//Nullable Types
  function greet(name: string | null | undefined) {
    if (name)
      console.log(name.toUpperCase())
    else {
      console.log('Name not Found!')
    }
  }
  // greet(null) //it gives an error because we cannot define the toUpperCase of null or an undefined object
  //that is why null and undefined are common source of problems
  greet(undefined)

//Optional Chaining type
  //when workign with nullable objects, we often have to do null checks like
  type Customer = {
    birthday?: Date
  }
  function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
  }
  let customer = getCustomer(0);
  // if (customer !== null && customer !== undefined) 
  //   console.log(customer.birthday);
  //or
  //Use Optional property access operator
  console.log(customer?.birthday?.getFullYear()); //. is also called chaining operator
  //execute the code: tsc && node dist/index.js
  //or
  // Use Optional element access operator -> when we are dealing with arrays
  // customers?[0] --> So, if the element exist, it wil print otherwise not
  //or
  // Optional call
  let log: any = null;
  log?.('a'); //if log is referencing to the actual function then it will work otherwise we will get undefined


