document.getElementById('dark-mood').addEventListener('click', function(){
    document.body.style.backgroundColor = '#17334f';
})

document.getElementById('day-mood').addEventListener('click', function(){
    document.body.style.backgroundColor = 'rgb(207 250 254)';
})

// log in section 

document.getElementById('submit-button').addEventListener('click', function(){
    const emailBox = document.getElementById('email-box');
    const getEmail = emailBox.value ;
    emailBox.value = '' ;
    // password section 
    const passwordSection = document.getElementById('password-section');
    const getPassword = passwordSection.value;
    passwordSection.value = '';

    if(getEmail === 'mdnayeem@gmail.com'  &&  getPassword === '123'){
        window.location.href = 'myMoney.html'
    }
    else (
        
        alert('invalid user')
    )
});