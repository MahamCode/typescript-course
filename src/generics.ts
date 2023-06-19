//EXAMPLE # 1
//Simple Function
    function logAnything (arg: any) {
        console.log(arg)
        return arg
    }
    logAnything('a')
    logAnything([1,2]) //Problem is, when I hover it, it will not let me know the type of it so,
//Generic Function
    //A generic function will not loss the type information
    function logAnythingWithGenerics<T> (arg: T): T {
        console.log(arg)
        return arg;
    }
    logAnythingWithGenerics([1,2]) 

//EXAMPLE # 2
    interface HasAge {
        age: number;
    }
    function getOldest(people: HasAge[]): HasAge {
        console.log(people.sort((a,b) => b.age  - a.age)[0])
        //sort in decending order
        return people.sort((a,b) => b.age  - a.age)[0];
    }
    const people = [{age: 30}, {age: 40}, {age: 10}]
    getOldest(people)
    //or
    getOldest(people).age
    interface Player {
        name: string,
        age: number
    }
    const players: Player[] = [
        {name: 'maham', age: 22},
        {name: 'sheeza', age: 20},
    ]
    //getOldest(players).name --> here I cannot get name property because HashAge have not this property
    const person = getOldest(players) as Player; //did assertion, means I did it by force
    person.name; //Now I can access name property but it's not a good approach, we can do it through Generics
    console.log(person.name)

    function getOldestGeneric<T extends HasAge>(people: T[]): T {//Here I'm ensuring the thing that this T must have HasAge property by doing <T extends HasAge> this
        console.log(people.sort((a,b) => b.age  - a.age)[0])
        //sort in decending order
        return people.sort((a,b) => b.age  - a.age)[0];
    }
    const personGeneric = getOldestGeneric(players)
    personGeneric.name; //Now It is done without assertion
    console.log(personGeneric.name)

//EXAMPLE # 3
    interface IPost {
        id: number,
        title: string
    }
    interface IUser {
        id: number,
        name: string
    }

    //async function always returns a Promise
    const fetchPostData = async(path: string): Promise<IPost[]> => {
        const response = await fetch(`https://example.com${path}`);
        return response.json();
    }
    //async function always returns a Promise
    const fetchUsersData = async(path: string): Promise<IUser[]> => {
        const response = await fetch(`https://example.com${path}`);
        return response.json();
    }

     //Now to avoid code repetition:
     const fetchData = async <T>(path: string): Promise<T> => {
        const response = await fetch(`https://example.com${path}`);
        return response.json();
    }

    //annonymous function or IIFE (Immediately Invoked Function Expression) 
    (async() => {
        // const posts = await fetchPostData('/posts');
        // posts[0].

        // const users = await fetchUsersData('/users')
        // users[0].

        const data = await fetchData<IUser[]>('/users')
        data[0].name;
        const dataPost = await fetchData<IPost[]>('/users')
        dataPost[0].title;
    })();

   



