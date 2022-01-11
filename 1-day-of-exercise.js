// ==================>  constructor function
// function Obj(fun) {
//     this.age = 1
//     this.fun = () => console.log(2);
// }
// let obj1 = new Obj()
// console.log(obj1);


// ====================> nested objects
// let myObj = {
//     name : 'javad',
//     lastName : 'gt',
//     job : 'developer',
//     parentName : {
//         fn : 'reza',
//         mn : 'shokat',
//         myFun(){
//             console.log(1);
//         }
//     }    
// }
// console.log(myObj);
// let myObj2 = myObj.parentName


// =======================> object destructuring
// let {parentName : {fn}} =  myObj
// console.log(fn);
// function obj({name : N = 'Ali' , lastName , job : anotherJob , parentName : {fn , mn}  }) {
//     console.log(`im ${N} ${lastName} and my job is ${anotherJob} and my parent name i a ${fn} and ${mn} `);
// }
// obj(myObj)
