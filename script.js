const inputName = document.getElementById('username')
const inputPassword = document.getElementById('password')
const register = document.getElementById('register')
const login = document.getElementById('login')

let accountList = JSON.parse(localStorage.getItem('accountList'));

if (accountList === null) {
    accountList = []
}

register.addEventListener('click', () => {
    
    if (accountList.find(account => account.username === inputName.value)) {
        alert('This username has been taken');
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
