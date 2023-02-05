const range = document.getElementById("range");
const psw = document.getElementById("psw");
const submit = document.getElementById("submit");
const eye = document.getElementById('eye')
const copy = document.getElementById('copy')
const copied = document.getElementById('copied')

let value = 15
let text = ''
const characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()\_+~|}{[]:;?><,./-=";


range.addEventListener("change", (e) => {
    value = range.value
    submit.innerText = `generate   ${value}`;
});


submit.addEventListener("click", (e) => {
  e.preventDefault();
  let newPassword = generatePassword(value)
  psw.innerText = newPassword
  text = psw.innerText
  if(eye.classList.contains('fa-eye-slash')){
    // eye.classList.remove('fa-eye-slash')
    // eye.classList.add('fa-eye')
    closeText()
  }
});

const generatePassword = (length) => {
    let password = ''
    while(password.length < length){
        let random = Math.trunc(Math.random() * 90)
        password += characters[random]
    }
    return  password
};


copy.addEventListener('click', (e) =>{
    navigator.clipboard.writeText(psw.innerText)
    copied.style.visibility = 'visible'
    setTimeout(() => {
        copied.style.visibility = 'hidden'
    },1000)
})


eye.addEventListener('click', (e) => {
    eye.classList.toggle('fa-eye')
    eye.classList.toggle('fa-eye-slash')
    closeText()
})

const closeText = () => {
    closedText = psw.innerText.split('').map(l => (l = '*')).join('')
    if(eye.classList.contains('fa-eye')){
        psw.innerText = text
    }
    else{
        psw.innerText = closedText
    }
}