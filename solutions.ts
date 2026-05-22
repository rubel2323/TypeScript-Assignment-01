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
getProperty(user,'name')