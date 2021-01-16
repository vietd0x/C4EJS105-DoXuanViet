//______________1_____________Counter
document.getElementById('add').addEventListener('click', (e)=>{
    document.getElementById('val').innerHTML = ++document.getElementById('val').innerHTML;
});
document.getElementById('sub').addEventListener('click', (e)=>{
    document.getElementById('val').innerHTML = --document.getElementById('val').innerHTML;
});

//______________2_____________
// document.getElementById('timer').addEventListener('keydown', (e)=>{
//     console.log(e.value);   
// });
let time_inp = document.getElementById('time');
let countdown = document.getElementById('countdown');
let start_btn = document.getElementById('start');
let stop_btn = document.getElementById('stop');
document.getElementById('start').addEventListener('click', (e) =>{
    countdown.innerHTML = time_inp.value;
    time_inp.value = '';
    start_btn.disabled = true;
    stop_btn.disabled = false;
    let time = setInterval(() => {
        countdown.innerHTML = countdown.innerHTML - 1
        if(countdown.innerHTML == 0)
        {
            clearInterval(time);
            countdown.innerHTML = "Time's up";
            start_btn.disabled = false;
        stop_btn.disabled = true;
        }
    }, 1000);
});
document.getElementById('stop').addEventListener('click', () =>{
    
    start_btn.disabled = false;
    stop_btn.disabled = true;
    countdown.innerHTML = 'Stopped';
});