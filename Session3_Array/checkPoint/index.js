// /*
// Write a script asking users their username, if the entered username is too long (>15 characters), 
// tell them that and ask them to re-enter a new username, if the username is short enough (<=15 characters), tell them it is good
// */
// let username;
// let len;
// do{
//     username = prompt("register an username");
//     len = username.length;
// }while(len > 15)
// alert("Good username");
/*__________________________________________________________
fun quizz
*/
// let ans
// do{
//     ans = prompt("How many legs does a spider have?\n1. None\n2. 4 legs\n3. 8 legs\n4. 12 legs");
// }while(ans != 1 && ans != 2 && ans != 4 && ans != 3)
// if(ans == 3)
//     alert("Bravo, you are correct");
// else
//     alert("Good luck next time");

/*___________________________________________________________
Ng dung nhap n so nguyen ngau nhien tu ban fim
a. Sap xep day vua nhap theo chieu tang dan
b. Loc day tren thanh 2 day: day chan va day le
c. Loai bo cac so trung nhau o 2 day
*/
let n = Number(prompt("Nhap n:"));
let arr = [];
for(let i = 0; i < n; ++i)
{
    arr[i] = Number(prompt(`Nhap so nguyen thu ${i + 1}`));
}
// arr.sort();
// alert(`day so nguyen sau khi sap xep: ${arr}`);

// let evenArr = [];
// let oddArr = [];
// for(let i = 0; i < n; ++i)
// {
//     if(arr[i] % 2 == 1)
//         oddArr.push(arr[i]);
//     else if(arr[i] == 0)
//         continue;
//     else
//         evenArr.push(arr[i]);
// }
// alert(`day chan: ${evenArr}\nday le: ${oddArr}`);

function rmDuplicateVal(Arr){
    let len = Arr.length;
    Arr.sort();
    for(let i = 0; i < n-1; )
    {
        if(Arr[i] == Arr[i+1])
            Arr.splice(i+1, 1);
        else
            ++i;
    }
}
rmDuplicateVal(arr)
console.log(arr);
// 3 3 3 3 1