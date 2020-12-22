//________________3_____________
console.log("_________________3a______________");
for (let i = 0; i < 7; ++i)
    console.log(i);

console.log("_________________3b______________");
let n = Number(prompt("3b. Enter a number: "));
for (let i = 0; i < n; ++i)
    console.log(i);

console.log("_________________3c______________");
n = Number(prompt("3c. Enter n"));
for (let i = 3; i < n; ++i)
    console.log(i)

console.log("_________________3d______________");
n = Number(prompt("3d. Enter n"));
let c = Number(prompt("3d. Enter c"));
for (; c < n; c++)
    console.log(c);

console.log("_________________3e______________");
n = Number(prompt("3e. Enter n"));
c = Number(prompt("3e. Enter c"));
for (; c < n; c += 3)
    console.log(c);

console.log("_________________3f______________");
n = Number(prompt("3f. Enter n"));
c = Number(prompt("3f. Enter c"));
let s = Number(prompt("3f. Enter s"));
for (; c < n; c += s)
    console.log(c);

//___________________4_______________
let factOfN = 1
n = Number(prompt("4. Enter a number"));
for (let i = 2; i < n + 1; ++i)
    factOfN *= i;
alert(`The factorial of ${n} is ${factOfN}`);
//___________________5_______________
let TheirAge = ~~prompt("5. How old are you?");
if (TheirAge < 14)
    alert("You are not old enough to view this content");
else
    alert("Enjoy!");
//___________________6_______________
let x = Number(prompt("6. Enter a number"));
console.log(x);
if (x < 4.5)
    alert("Lower half of 9");
else
    alert("Higher half of 9");

//___________________7_______________
n = Number(prompt("7. n = "));
x = Number(prompt("7. x = "));
if (x < n / 2)
    alert(x + " is in lower half of " + n);
else
    alert(x + " is in higher half of " + n);
//___________________8_______________
x = Number(prompt("8. x ="));
if (x == 0)
    alert("x = 0");
else if (x % 2 == 1)
    alert(x + " is an odd number");
else
    alert(x + " is an even number");
//___________________9_______________
console.log("________________9a________________");
for (let i = 0; i < 3; ++i)
    console.log('L');
for (let j = 0; j < 3; ++j)
    console.log('H');
console.log("________________9b________________");
n = Number(prompt("Enter the total number of L's and H's?"));
let l = Math.ceil(n / 2);
for (let i = 0; i < l; ++i)
    console.log('L');
for (let j = 0; j < n - l; ++j)
    console.log('H');
console.log("________________9c________________");
for (let i = 0; i < 8; i++)
    if (i % 2 == 0)
        console.log(0);
    else
        console.log(1);
console.log("________________9d________________");
n = ~~prompt("9d. Enter the total number of 1's and 0's?");
for (let i = 0; i < n; i++)
    if (i % 2 == 0)
        console.log(0);
    else
        console.log(1);
//_____________________10________________________
let m = Number(prompt("Your weight in kg?"));
let h = Number(prompt("Your height in cm?"));
h /= 100;
let bmi = (m / (h * h)).toFixed(1);
alert("Your BMI is " + bmi);
if (bmi < 16)
    alert("U are severely underweight");
else if (bmi < 18.5)
    alert("U are underweight");
else if (bmi < 25)
    alert("U are normal");
else if (bmi < 30)
    alert("U are overweight");
else
    alert("U are obese");
