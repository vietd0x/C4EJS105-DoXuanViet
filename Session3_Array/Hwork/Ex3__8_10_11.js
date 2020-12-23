// console.log('_______2________');
// const s = "Hello beauty there";
// let words = s.split(" ");
// console.log(words);

// console.log('_______3________');
// const a = [4, 1, 2001, 'viet'];
// console.log(...a);

// console.log('_______4________');
// let taskRequest;
// let clothes = ['Jeans', "T-shirt", "Socks"];
// while(true)
// {
//     taskRequest = prompt("Hi there, welcome to shop admin panel, what do u want(C, R, U, D)?");
//     if(taskRequest != 'c' && taskRequest != 'r' && taskRequest != 'u' && taskRequest != 'd')
//         alert("This command is not supported");
//     else
//     {
//         let n = clothes.length;
//         if(taskRequest == 'r'){
//             for(let i = 0; i < n; ++i)
//                alert(`${i+1}. ${clothes[i]}`);
//         }
//         else if(taskRequest == 'c')
//         {
//             let NewItem = prompt("Enter the name of the new item");
//             clothes.push(NewItem);
//         }
//         else if(taskRequest == 'u')
//         {
//             let index_ = Number(prompt("Enter the position u want to update"));
//             let itemUpdate = prompt("Enter the new name");
//             clothes[index_ - 1] = itemUpdate;
//         }
//         else 
//         {
//             let index_ = Number(prompt("Enter the position u want to delete"));
//             clothes.splice(index_ - 1, 1);
//         }
//         alert("Done");
//         let exit = prompt("press x to exit")
//         if(exit == 'x')
//             break;
//     }
// }
// //___________________________5___________________
// let SeqOfNum = prompt('Enter a squence of Number, separated by commas(,)');
// let NumList = SeqOfNum.split(',');
// let n = NumList.length;
// let sum = 0;
// for(let i = 0; i < n; ++i)
//     sum += Number(NumList[i]);
// alert("the sum of them is " + sum);
// //___________________________6____________________
// SeqOfNum = prompt('Enter a squence of Number, separated by commas(,)');
// NumList = SeqOfNum.split(',');
// NumList.sort();
// alert(`The smallest number is ${NumList[0]}`);
// //___________________________7____________________
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let x = Number(prompt("Enter a number"));
// n = arr.length;
// for(let i = 0; i < n; i++)
//     if(x == arr[i])
//         alert(x + " is FOUND in my array at index " + i);
// alert(x + " is NOT found in my array");
//___________________________8____________________
let sheepSize = [5, 7, 300, 90, 24, 50, 75];
console.log('_______8.1________');
console.log('Hello, my name is Viet and here is my sheep sizes:');
console.log(...sheepSize);
console.log('_______8.2________');
console.log(`Now my biggest sheep has size ${Math.max(...sheepSize)}, let's shave it`);
console.log('_______8.3________');
console.log("After shearing, here is my flock");
sheepSize[sheepSize.indexOf(Math.max(...sheepSize))] = 8;
console.log(...sheepSize);
console.log('_______8.4________');
console.log('\nMONTH 1\nOne month has, passed, my sheeps have grown, here are their sizes');
let NumofSheep = sheepSize.length;
for(let i = 0; i < NumofSheep; ++i)
    sheepSize[i] += 50;
console.log(...sheepSize);
console.log('_______8.5________');
let month = 2;
while(month < 4)
{
    console.log(`\nMONTH ${month}\nOne month has, passed, my sheeps have grown, here are their sizes`);
    let NumofSheep = sheepSize.length;
    for(let i = 0; i < NumofSheep; ++i)
        sheepSize[i] += 50;
    console.log(...sheepSize);
    ++month;
    console.log(`\nNow my biggest sheep has size ${Math.max(...sheepSize)}, let's shave it`);
    console.log("After shearing, here is my flock");
    sheepSize[sheepSize.indexOf(Math.max(...sheepSize))] = 8;
    console.log(...sheepSize);
}

console.log('_______8.6________');
NumOfSheep = sheepSize.length;
let totalSize  = 0;
for(let i = 0; i < NumOfSheep; ++i)
    totalSize += sheepSize[i];
console.log(`My flock has size in total: ${totalSize}`);
console.log(`I would get ${totalSize} * 25 = ${totalSize * 25}`);

//_____________________10_____________
let seqOfName = prompt("Enter a sequence of names");
let nameList = seqOfName.split(', ');
n = nameList.length;
for(let i = 0; i < n; ++i)
{
    alert()
}
