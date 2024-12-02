let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains('increase')) {
            count++;
        
        }else if (styles.contains('decrease')) {
            count--;
        
        } else if (styles.contains('increase5')) {
            count+=5;
        
        }else if (styles.contains('decrease5')) {
            count-=5;
        
        }else if (styles.contains('random')){
             //count = Math.floor(Math.random() * 201)-101;
             if(count>0){
                count = Math.floor(Math.random() * -101);
             }else {
                count = Math.floor(Math.random() * 101);
             }
        
        }else {
            count = 0;
        
        }

        if(count>0){
            value.style.color = "green"
        }
        if(count==0 ){
            value.style.color = "black"
        }
        if(count<0 ){
            value.style.color = "red"
        }

        value.textContent = count;
        
        
    });
});
