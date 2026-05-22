# Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.


`any` is a type safety hole and `unknown` is safer for handling unpredictable data by type narrowing as using type guard.


Because of their operation principle, for `any` type , ts-compiler disables itself from checking it.So, errors occur only on runtime and thus Apps crash.

where `unknown` type does not allow any arbitrary operation on it without using type guard i.e. type narrowing.

```ts example

let anyOfVal: any     = 42;
let unknownOfVal: unknown = 42;

// any → compiler stops and runtime crash
anyOfVal.toUpperCase(); 

// unknown → compiler shows warning
unknownOfVal.toUpperCase();

// unknown → type narrowing will make it okay
if (typeof unknownOfVal === "string") {
    unknownOfVal.toUpperCase(); 
}

```

# Explanation  the concept of type narrowing
For `unknown` type operation,or any other cases where TypeScript is not sure of about what type of data is using - then it needs to make type narrow.


The word narrow means to make short from various type of data to more specific data.It may be using mainly 5 types given below-

## 1. typeof    --    for primitive type
` if (typeof value === "string"){.....}`

## 2.instanceof -- for class/object
`if (value instanceof Date){....}`

## 3.in operator -- for searching property within object
 `if ("meow" in animal) {....}`

## 4.Equality check  -- for fixed value
` if (value === null){....}`

## 5.Custom type guard -- developer made when necessary
` type User = { name: string; age: number };`
 



Thus, TypeScript allows automatic flow analysis by type tracking block and perform necessary operation.


