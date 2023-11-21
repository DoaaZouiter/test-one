let email = document.getElementById('email')
let pass = document.getElementById('pass')
let inputContainer = document.getElementsByClassName('input-container')


const emailError = document.createElement("div").appendChild(document.createTextNode("يجب أن يكون البريد الإلكتروني صحيح"))
const passError = document.createElement("div").appendChild(document.createTextNode("كلمة السر يجب ان تكون بين 5 و 10 ارقام"))

EmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
function login (e) {
    e.preventDefault()
    if (email.value && pass.value) {        
        if (pass.value.length < 5 || pass.value.length >10) {
           inputContainer[1].appendChild(passError) 
        }
        else {
            // inputContainer[1].removeChild(passError)
        }
    
        if (!EmailRegex.test(email.value)) {
           inputContainer[0].appendChild(emailError) 
        }
        else {
            // inputContainer[0].removeChild(emailError)
        }
    }
}