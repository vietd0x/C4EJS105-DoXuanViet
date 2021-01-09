// console.log('____2____');
// setInterval(() => {
//     console.log('Heehaw');
// }, 1000);

// console.log('____4____');
// let li_tag = document.getElementsByTagName('LI');
// console.log(li_tag[1]);
// const nav = () =>{
//     for(let i = 0; i < li_tag.length; i++)
//         console.log(li_tag[i])
// }
// nav();

// console.log('____5____');
// let singer_name = document.getElementsByTagName('DIV');
// console.log(singer_name[2]);
// function allName(){
//     for(let i = 1; i < singer_name.length - 1; i++)
//         console.log(singer_name[i]);
// }
// allName();

// console.log('____7____');
// document.getElementById('button1').addEventListener("click", (e) => {
//     console.log(e.target);
// }, false);
// document.getElementById('button2').addEventListener("click", (e) => {
//     console.log(e.target);
// });

// document.querySelector('input').addEventListener('keydown', (e) =>{
//     inp.textContent += ` ${e.key}`;
// });

// //_______________8_________________
// function wish(name, thing){
//     alert(`My name is ${name}, I wish ${thing} this year`);
// }
// wish('Viet', 'zZzZ');

// //_______________9_________________
// let user = prompt("user's name");
// let userWish = prompt("user's wish");
// function wish(name, thing){
//     alert(`My name is ${name}, I wish ${thing} this year`);
// }
// wish(user, userWish);

// //_______________10_________________
// let user = prompt("user's name");
// let userWish = prompt("user's wish");
// function wish(name, thing){
//     if(thing)
//         alert(`My name is ${name}, I wish ${thing} this year`);
//     else
//         alert(`My name is ${name}, I wish zZzZ this year`);
// }
// wish(user, userWish);

// console.log('____11____');
// let btn = document.getElementById('upper_btn');
// let inp = document.getElementById('name_input');
// let res_div = document.getElementById('result_div');
// console.log(btn);
// btn.addEventListener('click', ()=>{
//     console.log('Upper it!!! just clicked');
// })
// console.log(inp);

// console.log('____11.5____');
// let text = '';
// inp.addEventListener('keydown', (e)=>{
//     text += e.key;
// });
// btn.addEventListener('click', ()=>{
//     console.log(`User's name: ${text}`);
//     console.log(`User's name uppercase: ${text.toUpperCase()}`);
//     res_div.innerHTML = text.toUpperCase();
//     text = "";
// });
// console.log(res_div);

console.log('____12____');
let items = ['Backpack', 'MiBand watch', 'Ring'];
let item_list = document.getElementById("item_list_ul");
let btn = document.getElementById('add_btn');
let input = document.getElementById('item_input'); 
console.log(items);

// add list to <ul>
console.log('____12.4____');
for(let i = 0; i < items.length; i++)
    item_list.insertAdjacentHTML('beforeend', `<li><span>${items[i]}</span></li>`);
console.log(item_list);

//___________________12.7________________
btn.addEventListener('click', ()=>{
    console.log("Add button clicked");
});
//___________________12.8________________
let new_item = '';
input.addEventListener('keydown', (e)=>{
    new_item += e.key;
});
btn.addEventListener('click', ()=>{
    console.log(new_item);
    items.push(new_item);
    item_list.insertAdjacentHTML('beforeend', `<li><span>${new_item}</span></li>`);
    console.log(items);
    new_item = '';
})
//___________________12.12________________
let item_li = item_list.getElementsByTagName('li');
for(let i = 0; i < item_li.length; i++)
    item_li[i].insertAdjacentHTML('beforeend', '<button>remove</button>');
let rm_btn = item_list.getElementsByTagName('button');

rm_btn.addEventListener('click', (e)=>{
    console.log(e.target);
});