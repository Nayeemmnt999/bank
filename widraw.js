document.getElementById('widraw-button').addEventListener('click', function(){
    const widrawInput = document.getElementById('widraw-input');
    const widrawGet = widrawInput.value ;
    const widrawInt = parseFloat(widrawGet) ;

    // 2nd section 
    const widrawTotal = document.getElementById('widraw-total');
    const widrawTotalGet = widrawTotal.innerText ;
    const widrawTotalGetInt = parseFloat(widrawTotalGet);

    const totalWdirawAmount = widrawInt + widrawTotalGetInt ;
    widrawTotal.innerText = totalWdirawAmount ;

    // balence cutt 
    const balenceTotal = document.getElementById('balence-total');
    const balenceTotalGet = balenceTotal.innerText ;
    const BalenceTotalInt = parseFloat(balenceTotalGet);
    
    const balenceValue = BalenceTotalInt - widrawInt ;
    balenceTotal.innerText = balenceValue ;

    widrawInput.value = '';
})