//___________________________1______________________
// function resolveAfter5Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`Promise is da best 1`);
//         }, 5000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter5Seconds();
//     console.log(result);
// }
// asyncCall();


// let promise1_2 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(`Promise is da best 2`), 5000);
// })
// promise1_2.then(
//     result => alert(result),
//     error => alert(error)
// );

console.log('_________________2_______________');
async function fetchAsync() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
    return await response.json();
}
let data = fetchAsync();
console.log(data);

console.log('_________________4_______________');
function randNum() {
    return Math.floor(Math.random() * 11);
}
const x = randNum();
if (x < 0) {
    console.log(`Failed: the number is smaller than 0`);
} else if (x > 10) {
    console.log(`Failed: the number is bigger than 10`);
} else
    console.log('Passed, bravo');

console.log('_________________5_______________');
function randNumAtoB(a, b) {
    return a + Math.floor(Math.random() * (b + 1));
}
const d = randNumAtoB(4, 16);
if (d < 4) {
    console.log(`Failed: the number is smaller than 4`);
} else if (d > 16) {
    console.log(`Failed: the number is bigger than 16`);
} else
    console.log('Passed, bravo');

console.log('_________________6_______________');
function distance(x1, y1, x2, y2) {
    let x = Math.abs(x2 - x1);
    let y = Math.abs(y2 - y1);
    return (Math.sqrt((x * x) + (y * y)));
}
const dist = distance(3, 10, 0, 6);
console.log(dist);
if (dist !== 5) {
    console.log(`Failed: the calculation is wrong`);
} else {
    console.log(`Passed, bravo`);
}

//___________________________7______________________

fetch("http://quotes.rest/qod.json")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('quote').innerHTML = data['contents']['quotes'][0]['quote'];
        document.getElementById('author').innerHTML = data['contents']['quotes'][0]['author'];
    });

//___________________________8______________________
let item_inp = document.getElementById('item_inp');
let add_btn = document.getElementById('add_btn');
let list = document.getElementById('olist');
var i = 0;
getAPI();
function generateId()
{
    const x = Math.random();
    const y = x.toString(36);
    const z = y.substr(2, 9);
    return z; 
}

async function getAPI(){
    const conn = await fetch('https://sheetdb.io/api/v1/fjz7it2y4dol1');
    const data = await conn.json();
    for(let item of data){
        list.insertAdjacentHTML('beforeend', `<li id = ${++i}><span>${item.name}</span><button onClick = "rmLine(${i})">X</button></li>`);
    }
}

function rmLine(id_rm)
{
    let name_val = document.getElementById(id_rm).firstChild.innerHTML;
    //alert(name_val);
    axios.delete(`https://sheetdb.io/api/v1/fjz7it2y4dol1/name/${name_val}`)
    .then( response => {
        console.log(response.data);
    })
    document.getElementById(id_rm).remove();
}

add_btn.addEventListener('click', ()=>{
    let new_item = item_inp.value;
    let item_id = generateId(new_item);
    axios.post('https://sheetdb.io/api/v1/fjz7it2y4dol1',{
        "data": {'id': `${item_id}`,"name": `${new_item}`}
    }).then( response => {
        console.log(response.data);
    });
    list.insertAdjacentHTML('beforeend', `<li id = ${++i}><span>${new_item}</span><button onClick = "rmLine(${i})">X</button></li>`);
    item_inp.value = '';
    getAPI();
});
function clr_list(){
    list.innerHTML = '';
}
async function searchAPI(name){
    const conn = await fetch(`https://sheetdb.io/api/v1/fjz7it2y4dol1/search_or?name = ${name}`);
    const data = await conn.json();
    for(let item of data){
        list.insertAdjacentHTML('beforeend', `<li id = ${++i}><span>${new_item}</span><button onClick = "rmLine(${i})">X</button></li>`);
    }
}

item_inp.addEventListener('keydown', (e) =>{
    let val = item_inp.value;
    //clr_list();
    searchAPI(val);
})