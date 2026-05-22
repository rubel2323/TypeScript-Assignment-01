// problem-1:

const filterEvenNumbers = (value: number[]): number[] => {
  return value.filter((digit) => digit % 2 === 0);
};


// problem-2:

const reverseString=(value:string):string=>{
  let rev="";
  for(const beta of value)
    {
    rev=beta+rev;

  }
  return rev;
}


// Problem 3:

type StringOrNumber= string | number 
const checkType=(userInfo:StringOrNumber)=>{
if(typeof userInfo === 'string'){
  return "String";
}
if(typeof userInfo==='number'){
  return 'number';
}
}

 //Problem 4:

const getProperty=<T,K extends keyof T>(object:T,key:K):T[K]=>{
  return object[key];
}

const user = { 
  id: 1, 
  name: "John Doe", 
  age: 21 
};
getProperty(user,'name');



// Problem-5

interface Book{
 
title: string;
 author: string;
publishedYear: number;

};


const toggleReadStatus=(user:Book):Book & {isRead:boolean}=>{
return {...user,isRead:true };

}

  const myBook:Book = { 
    title: "TypeScript Guide",
     author: "Jane Doe",
      publishedYear: 2024,
      
     };
toggleReadStatus(myBook);

//problem-6
     class Person {

      name: string;
      age: number;

    constructor(
      name: string,
      age: number
    )
      {
        this.name=name;
        this.age=age;
      }

     }

     class Student extends Person{
      grade: string;

      constructor(name:string,age:number,grade:string)
      {
        super(name,age);
        this.grade=grade;
      }
      getDetails(){
        return  `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}` ;
      }

     }

 const student= new Student("Alice",34,"B");
   student.getDetails();  



// Problem 7:

const getIntersection=(num1:number[], num2:number[]):number[]=>{
const result= num1.filter(digit=>num2.includes(digit))
return result;
}
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);


