let score = document.getElementById('score').value;
let sum1 = document.getElementById('sum1');
let sum2 = document.getElementById('sum2');
let viewresultRandom = document.getElementById('resultrandom');
let right = document.getElementById('right');
let wrong = document.getElementById('wrong');
//while(score > 0 && score < 101){
    valueSum1 = 1 + Math.floor(Math.random() * 9); // Generate a random number between 1 and 9
	valueSum2 = 1 + Math.floor(Math.random() * 9); // Generate a random number between 1 and 9
	resultRandom = 1 + Math.floor(Math.random() * 18); // Generate a random number between 1 and 18
    trueResult = valueSum1 + valueSum2;

    sum1.innerHTML = valueSum1;
	sum2.innerHTML = valueSum2;
    viewresultRandom.innerHTML = resultRandom;
    if(trueResult == resultRandom)
    {
        right.addEventListener('click', ()=>{
            ++score;
        })
        wrong.addEventListener('click', ()=>{
            --score;
        })
    }
    else
    {
        right.addEventListener('click', ()=>{
            --score;
        })
        wrong.addEventListener('click', ()=>{
            ++score;
        })
    }
//};