let count = 30;
const value = document.querySelector('#value');
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
let countdown;

value.style.color = "green"

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    countdown = setInterval(() => {
        
        if (count>0){
            count--;
            value.textContent = count;
                //colors
                if(count>20){
                    value.style.color = "green"}
                if(count>10 && count<20){
                    value.style.color = "brown"
                }
                if(count<11){
                    value.style.color = "red"
                }
            
        //counterchecker
        if (count === 0) {
            clearInterval(countdown);
            startBtn.disabled = false;
        }
    }}, 1000);
});

resetBtn.addEventListener('click', () => {
    clearInterval(countdown);
    count = 30;
    value.textContent = count;
    startBtn.disabled = false;
    value.style.color = "green";
});
