console.log('_______2________');
const s = "Hello beauty there";
let str = s.split(" ");
console.log(str);

console.log('_______3________');
const a = [4, 1, 2001, 'viet'];
console.log(...a);

console.log('_______4________');
let taskRequest;
let clothes = ['Jeans', "T-shirt", "Socks"];
while(true)
{
    taskRequest = prompt("Hi there, welcome to shop admin panel, what do u want(C, R, U, D)?");
    if(taskRequest != 'c' && taskRequest != 'r' && taskRequest != 'u' && taskRequest != 'd')
        alert("This command is not supported");
    else
    {
        let n = clothes.length;
        if(taskRequest == 'r'){
            for(let i = 0; i < n; ++i)
               alert(`${i+1}. ${clothes[i]}`);
        }
        else if(taskRequest == 'c')
        {
            let NewItem = prompt("Enter the name of the new item");
            clothes.push(NewItem);
        }
        else if(taskRequest == 'u')
        {
            let index_ = Number(prompt("Enter the position u want to update"));
            let itemUpdate = prompt("Enter the new name");
            clothes[index_ - 1] = itemUpdate;
        }
        else 
        {
            let index_ = Number(prompt("Enter the position u want to delete"));
            clothes.splice(index_ - 1, 1);
        }
        alert("Done");
        let exit = prompt("press x to exit")
        if(exit == 'x')
            break;
    }
}

 