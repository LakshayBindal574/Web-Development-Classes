const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const amount = document.getElementById('income');
    const income = parseInt(amount);
    if (income <= 1200000) {
        tax = 0;
    } else if (income <= 1600000) {
        tax = (income - 1200000) * 0.15;
    } else if (income <= 2000000) {
         tax = (400000 * 0.15) + (income - 1600000) * 0.20;
    } else {
        tax = (400000 * 0.15) + (400000 * 0.20) + (income - 2000000) * 0.30;
    }
    if(tax == 0){
        const result = document.querySelector('h2');
        result.textContent = `Tax: 0`;
    }
    else{
        const result = document.querySelector('h2');
        result.textContent = `Tax: ${tax}`;
    }
})