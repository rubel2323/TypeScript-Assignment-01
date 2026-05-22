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