console.log("_________4_________");
let dic = {
    'debug': "The process of figuring out why your program has a certain error and how to fix it",
    'done': "When your task is complete, the only thing u have to do is to wait for users to use it (no additional codes or actions needed)",
    'detect':"The formal word for \'error\'",
    'pm': "The short version of Project Manager, the person in charge of the final result of a project",
    'ui/ux': "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels"
}
console.log(dic);

// ____________________4.1_________________

let keyword;
while(true){
    let isFound = false;
    keyword = prompt("Enter a keyword");
    for(let i in dic)
    {
        if(i == keyword && isFound == false){
            alert(`${keyword}\n${dic[keyword]}`);
            isFound = true;
        }
    }
    if(isFound == false)
        alert(`We could not find your word: ${keyword}`);
}

//____________________4.2__________________
alert("Hi there, this is dev dictionary");
let keyword;
while(true){
    let isFound = false;
    keyword = prompt("Enter a keyword");
    for(let i in dic)
    {
        if(i == keyword && isFound == false){
            alert(`${keyword}\n${dic[keyword]}`);
            isFound = true;
        }
    }
    if(isFound == false)
    {
        let ex = prompt(`We could not find your word: ${keyword}, leave your explanation`);
        dic[keyword] = ex;
        alert("Done");
    }
}

// ____________________________5_________________________

console.log("________5___________");
let products = [
    {
        name :"Xiaomi portable charger 20000mah",
        price: "428",
        brand: "Xiaomi",
        category:"Charger",
        color:"White",
    },
    {
        name :"VSmart Active 1",
        price: "5487",
        brand: "VSmart",
        category:"Phone",
        color:"Black",
    },
    {
        name :"IPhoneX",
        price: "21490",
        brand: "Apple",
        category:"Phone",
        color:"Gray",
    },
    {
        name :"Samsung Galaxy A9",
        price: "8490",
        brand: "samsung",
        category:"Phone",
        color:"Blue",
    }
];

console.log("_________5.1___________");
let i = 0;
for(let item of products)
{
    console.log("_________________");
    console.log(`#${++i}. Name: ${item.name}`);
    console.log(`     Price: ${item.price}`);
}

console.log("_________5.2___________");
let position = ~~prompt("Enter product position:") - 1;
console.log(products[position].name);
console.log(products[position].brand);
console.log(products[position].price);
console.log(products[position].color);
console.log(products[position].category);

console.log("_________5.3___________");
let categr = prompt("Enter your category?");
for(let item of products)
{
    if(categr == item.category)
    {
        console.log("_________________");
        console.log(`Name: ${item.name}`);
        console.log(`Price: ${item.price}`);
    }
}

console.log("_________5.4___________");
products[0]['providers'] = 'Phukienzero Dientuccc';
products[1]['providers'] = 'Tgdd Ddghn VhStore';
products[2]['providers'] = 'Tgdd';
products[3]['providers'] = 'Tgdd';

i = 0;
for(let item of products)
{
    console.log("_________________");
    console.log(`#${++i}. Name: ${item.name}`);
    console.log(`    Price: ${item.price}`);
    console.log(`    Providers: ${item.providers}`);
}

console.log("_________5.5___________");
let provider = prompt("Enter provider?");
for(let item of products)
{
    if(provider == item.providers)
    {
        console.log("_________________");
        console.log(`Name: ${item.name}`);
        console.log(`Brand: ${item.brand}`);
        console.log(`Price: ${item.price}`);
        console.log(`Color: ${item.color}`);
        console.log(`Category: ${item.category}`);
        console.log(`Provider: ${item.providers}`);
    }
}

//___________________________6_____________________________

let learning_task = [
    {
        task: 'HTML',
        complete: false,
    },
    {
        task: "CSS",
        complete: false,
    },
    {
        task: "Basics of JS",
        complete: false,
    },
    {
        task: "Node Package Manager [npm]",
        complete: false,
    },
    {
        task: "Git",
        complete: false,
    },
];
console.log("_________6.1___________");
let i = 0;
console.log("Hi there, this is your learning tasks to front-end developer career:");
for(let item of learning_task)
{
    console.log(`${++i}. ${item.task}`);
    console.log(`   Complete: ${item.complete}`);
}

console.log("_________6.2-->6.5__________");
while(true)
{
    let command = prompt("Enter your command (New, Delete, Update, Complete");
    if(command == 'new' || command == "New")
    {
        let newTask = prompt("Enter new task:");
        let nT = {task: newTask, complete: false};
        learning_task.push(nT);
    }
    else if(command == 'update' || command == 'Update')
    {
        let position = ~~prompt("Enter position");
        let new_titile = prompt("Enter new title");
        learning_task[position - 1].task = new_titile;
    }
    else if(command == 'complete' || command == 'Complete')
    {
        let position = ~~prompt("Enter position");
        learning_task[position - 1].complete = true;
    }
    else if(command == 'delete' || command == 'Delete')
    {
        let position = ~~prompt("Enter position");
        learning_task.splice(position - 1, 1);
    }
    else
        break;
}

i = 0;
console.log("Hi there, this is your learning tasks to front-end developer career:");
for(let item of learning_task)
{
    console.log(`${++i}. ${item.task}`);
    console.log(`   Complete: ${item.complete}`);
}
console.log("_________6.6__________");
console.log("Hi there, this is your learning tasks to front-end developer career:");
for(let item of learning_task)
{
    if(item.complete == true)
        console.log(`[x] ${item.task}`);
    else
        console.log(`[ ] ${item.task}`);
}