// 1

let pre = document.getElementById('pre');
let click = document.getElementById('click');

click.addEventListener('click',()=>{
    let xhr = new XMLHttpRequest()
    xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1')
    xhr.send()
    xhr.addEventListener('readystatechange',()=>{
        if (xhr.readyState == 4) {
            if ((xhr.status >= 200 && xhr.status <= 300) || xhr.status == 304) {
                pre.innerHTML = xhr.responseText
            } else {
                pre.innerHTML = 'error'
            }
        }
    })
    
})


// 2
let form = document.getElementById('form');
let button = document.getElementById('button');




const pr = new Promise(funPr);
function funPr(resolved,reject) {
    let num = 0
    if (num) {
        resolved()
    } else {
        reject()
    }
}


pr.then(onfulfilled).catch(onrejected)

function onfulfilled() {
    console.log(1);
}

function onrejected() {
    console.log(0);
}



let pree = document.querySelector('pre')
let img = document.querySelector('img')
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://moviesapi.ir/api/v1/movies`,false)
xhr.send()
let res = JSON.parse(xhr.response).data[0].poster
img.setAttribute('src',res)


