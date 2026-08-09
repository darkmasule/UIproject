const inputName = document.getElementById('username')
const inputPassword = document.getElementById('password')
const register = document.getElementById('register')
const login = document.getElementById('login')
const listed = document.getElementById('listed')

let accountList = JSON.parse(localStorage.getItem('accountList'));

if (accountList === null) {
    accountList = []
}

register.addEventListener('click', () => {
    
    if (accountList.find(account => account.username === inputName.value)) {
        alert('This username has been taken');
    } else if (inputName.value === '') {
        alert('Empty username');
    } else if (inputPassword.value === '' ) {
        alert('Empty password')        
    } else {
        const account = {
        username: inputName.value,
        password: inputPassword.value
    }

    inputName.value = ''
    inputPassword.value = ''

    accountList.push(account)

    localStorage.setItem('accountList', JSON.stringify(accountList));

    }
    
    console.log(accountList);
})

login.addEventListener('click', () => {
    if (accountList.find(account => account.username === inputName.value && account.password === inputPassword.value)) {
        window.location.href = 'bluewhale.html'
    } else {
        alert('Wrong username or password');
    }
})

let usernamelist = accountList[0];
console.log(usernamelist);
accountList.forEach(account => {
listed.innerText += account.username + '\n';
});