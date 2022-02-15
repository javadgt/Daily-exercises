
//// js Data ====> json

const obj = {
    firstName : 'javad',
    lastName : 'gt',
    firends : ['mehdi','reza'],
    brother : { 
        name : 'milad',
        lastName : 'dehghani',
    },
    age : 19
}


let newJson = JSON.stringify(obj ,replacer ,1)
function replacer(key,value) {
    if (typeof value == 'string') {
        return undefined
    }
    return value
}
console.log(newJson);



// json ====> js Data

const json = `{
    "firends": ["mehdi","reza"],
    "brother": {"name" : "milad"},
    "age": 19
   }`


let newJs = JSON.parse(json)
console.log(newJs.firends);







// change hash per secend

// let arr = [0,1,2,3,4,5,6,7,8,9]

// setInterval(
//     () => {window.location.hash = arr[Math.floor(Date.now() / 100) % arr.length] }

// ,100);





