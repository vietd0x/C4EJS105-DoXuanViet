console.log("1.1 creat a random num from 0 to 1")
console.log(Math.random().toFixed(2));

console.log("________1.2_______");
let arr = [2, 5, 6, 9, 10];
console.log(arr[Math.floor(Math.random() * 5)]);

console.log("________1.3 -> 1.7_______");
let quizzes = [
    {
        question:'1+1 = ',
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        rightChoice: "2",
    },
    {
        question:'1+2 = ',
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        rightChoice: "3",
    },
    {
        question:'2*2 = ',
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        rightChoice: "4",
    },
    {
        question:'2+3 = ',
        choice1: "2",
        choice2: "3",
        choice3: "4",
        choice4: "5",
        rightChoice: "5",
    },
]
let score = 0;
for(let i = 0; i < quizzes.length; i++)
{
    let j = Math.floor(Math.random()*5); 
    let ans = prompt(`${quizzes[j].question}\n1. ${quizzes[j].choice1}\n2. ${quizzes[j].choice2}\n3. ${quizzes[j].choice3}\n4. ${quizzes[j].choice4}`);
    if(ans == quizzes[j].rightChoice)
        ++score;
}
alert(`U aswered correctly ${score} out of ${quizzes.length} questions`)
alert("We are out of question");

console.log("______________2.1______________");
const ListOfWord = ['to','be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'or', 'hat', 'late', 'sorry', 'my', 'team'];
let word_count = {};
for(i in ListOfWord)
{
    if(word_count[ListOfWord[i]])
        ++word_count[ListOfWord[i]];
    else
        word_count[ListOfWord[i]] = 1;
}
console.log(word_count);

console.log("_________3.3___________");
const inventory = [
    {
        name:"HP Envy 13ap",
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name:"Dell XPS 9370",
        price: 30000,
        brand:'Dell',
        quantity: 1,
    },
    {
        name:'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },
    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
    },
];
let inventoryByBrand = {};
for(let pc of inventory)
{
    if(inventoryByBrand[pc.brand])
        inventoryByBrand[pc.brand].push(pc);
    else
    {
        inventoryByBrand[pc.brand] = [];
        inventoryByBrand[pc.brand].push(pc);
    }
}
console.log(inventoryByBrand);
let brand_imp = prompt("Which brand? HP/Asus/Dell?");
let generations = '';
let total = 0;
for(let pc of inventoryByBrand[brand_imp])
{
    console.log(pc.name, pc.price);
    generations += "\n" + pc.name;
    total += pc.price * pc.quantity;
}
alert(`There are ${inventoryByBrand[brand_imp].length} generations of ${brand_imp} in inventory:\n${generations}\n\n With total value: ${total}`);
