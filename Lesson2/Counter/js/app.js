let count   = 0;
const value = document.querySelector('#value');
const btns  = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
   btn.addEventListener('click',function (e){
     const styles =e.currentTarget.classList;
     if (styles.contains('decrease')){
         count--;
     }else if(styles.contains('increase')){
         count++;
     }else  {
         count=0;
     }
     if (count > 10){
         value.style.color = '#00FF33';
     }
     if (count > 100){
           value.style.color = '#00FF00';
     }
     if (count < 10){
           value.style.color = "#00FF66";
     }
     if (count < 5){
           value.style.color = '#66FF00';
     }
     if (count === 0){
         value.style.color='#000';
     }
     if (count < 0){
         value.style.color='#339900';
     }
     if (count < -5){
           value.style.color='#336600';
     }
     if (count < -10){
           value.style.color='#666600';
     }
     if (count < -15){
           value.style.color='#993300';
     }
     if (count < -25){
           value.style.color='#CC0000';
     }
     value.textContent = count;
   });
});