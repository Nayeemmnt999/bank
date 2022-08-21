document.getElementById('deposit-btn').addEventListener('click', function(){
    // input field 
    const depositInput = document.getElementById('deposit-input');
    const depositValue = depositInput.value ;
    const newAmountValue = parseFloat(depositValue)
    // second 
    const depositTotal = document.getElementById('total-deposit')
    const grandTotal = depositTotal.innerText ;
    const previousTotal =  parseFloat(grandTotal) ; 
    // third 
    const plus = newAmountValue + previousTotal ;
    depositTotal.innerText = plus;

    // ballance total 

    const balenceTotal = document.getElementById('balence-total');
    const balenceTotalGet = balenceTotal.innerText ;
    const BalenceTotalInt = parseFloat(balenceTotalGet);
    
    const balenceValue = BalenceTotalInt + newAmountValue ;
    balenceTotal.innerText = balenceValue ;

    depositInput.value = '' ;
})