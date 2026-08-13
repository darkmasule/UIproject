const inputName = document.getElementById('username')
const inputPassword = document.getElementById('password')
const login = document.getElementById('login')
const signup = document.getElementById('signup')

const rgUsername = document.getElementById('rgusername')
const rgEmail = document.getElementById('rgemail')
const rgPassword = document.getElementById('rgpassword')
const register = document.getElementById('register')

const registerpanel = document.getElementById('registerpanel')
const rpclose = document.getElementById('rpclose')

let accountList = JSON.parse(localStorage.getItem('accountList'));

if (accountList === null) {
    accountList = []
}

register.addEventListener('click', () => {
    
    if (accountList.find(account => account.username === rgUsername.value)) {
        alert('This username has been taken');
    } else if (rgUsername.value === '') {
        alert('Invalid username');
    } else if (rgUsername.value.includes(' ')) {
        alert('Invalid username');
    } else if (rgEmail.value.includes(' ')) {
        alert('Invalid email');
    } else if (rgEmail.value === '') {
        alert('Invalid email');
    } else if (!rgEmail.value.endsWith('@gmail.com') && !rgEmail.value.endsWith('@outlook.com') && !rgEmail.value.endsWith('@yahoo.com') && !rgEmail.value.endsWith('@icloud.com') && !rgEmail.value.endsWith('@hotmail.com')) {
        alert('Invalid email');
    } else if (rgPassword.value === '' || rgPassword.value.includes(' ')) {
        alert('Invalid password')        
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

signup.addEventListener('click', () => {
    registerpanel.className = 'registerpanel2'
})

rpclose.addEventListener('click', () => {
    registerpanel.className = 'registerpanel'
})