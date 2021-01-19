//___________________________1______________________
function resolveAfter5Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Promise is da best 1`);
        }, 5000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter5Seconds();
    console.log(result);
}
asyncCall();


let promise1_2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(`Promise is da best 2`), 5000);
})
promise1_2.then(
    result => alert(result),
    error => alert(error)
);

console.log('_________________2_______________');
async function fetchAsync() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
    return await response.json();
}
let data = fetchAsync();
console.log(data);

console.log('_________________4_______________');
function randNum(){
    return Math.floor(Math.random() * 11);
}
const x = randNum();
if(x < 0){
    console.log(`Failed: the number is smaller than 0`);
} else if(x > 10){
    console.log(`Failed: the number is bigger than 10`);
}else
    console.log('Passed, bravo');

console.log('_________________5_______________');
function randNumAtoB(a, b){
    return a + Math.floor(Math.random() * (b+1));
}
const d = randNumAtoB(4, 16);
if(d < 4){
    console.log(`Failed: the number is smaller than 4`);
} else if(d > 16){
    console.log(`Failed: the number is bigger than 16`);
}else
    console.log('Passed, bravo');

console.log('_________________6_______________');
function distance(x1, y1, x2, y2)
{
    let x = Math.abs(x2 - x1);
    let y = Math.abs(y2 - y1);
    return (Math.sqrt((x * x) + (y * y)));
}
const dist = distance(3, 10, 0, 6);
console.log(dist);
if(dist !== 5){
    console.log(`Failed: the calculation is wrong`);
}else{
    console.log(`Passed, bravo`);
}
//___________________________7______________________
async function fetchQute() {
    let response = await fetch('http://quotes.rest/qod.json');
    let data = await response.json();
    return data.contents.quotes[0].quote;
}
let quotes_data = fetchQute();
console.log(quotes_data);
