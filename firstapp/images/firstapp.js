// let greet ="hello world";
// console.log("greet");
// //for loop
// i=10
// for (let i = 0; i <=5; i++) {
    
//     console.log(i);
// }

//while loop
// let i=1;
// while (i<=10){
//     console.log(i);
//     i++;
// }


// //do while loop
// let j=1;
// do{
//   console.log(j);
//   j++;


// }while(j<=5);


// //addition 
// function addition ( a,b){
// return a+b;
// }
// let result = addition(6,10);
// console.log(result);


// function areaOfReactangle( l,w) {

//     return l * w
// }
// let result = areaOfReactangle(20,20);
// console.log(result);


// let array=[];
//  const arrayElements = ()=>{

//     for (let i = 1; i <5; i++) {
//          array.push[i];
//         console.log(array);
//     }
//  }

//  arrayElements();

// let str = "hello World";
// let reverseString =(str)=>{
//    return str.split("").reverse().join("");
// }
// console.log(reverseString(str));


// let checkFunction =(num)=> {
//    //  if (num % 2 == 0){
//    //    return " even"
//    // }else{
//    //    return "odd"
//     return num %2==0 ? "it is even ": "is is odd";
   
// }
// console.log(checkFunction(9));

let array = [2, 4, 6, 6, 0, 0, 78];
let c = array.sort((a,b )=> b-a);
let v = [];
let u = [];

let divideArray = () => {
  for (const i in array) {
    if (array[i] == 0) {
      v.push(array[i]);
    } else {
        u.push(array[i]);
    }
  }
};

// Call the function to populate 'v'
divideArray();

console.log(c);
console.log(u);

x

