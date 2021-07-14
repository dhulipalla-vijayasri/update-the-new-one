/* Form Handlings  */

var form_validations = () => {

    //Target_Inputs
    var unameDOM = document.getElementById('uname')
    var emailDOM = document.getElementById('email')
    var pwdDOM = document.getElementById('pwd')
    var numberDOM = document.getElementById('number')
    var cpwdDOM = document.getElementById('cpwd')
    var textareaDOM = document.getElementById('textarea')
    var select123 = document.getElementById('select1')
    //Err_DOM
    var unameErr = document.getElementById('uname_err')
    var emailErr = document.getElementById('email_err')
    var pwdErr = document.getElementById('pwd_err')
    var numberErr = document.getElementById('number_err')
    var cpwdErr = document.getElementById('cpwd_err')
    var textareaErr = document.getElementById('textarea_err')
    var s1 = document.getElementById('select_err')


    var status = true
    
    //Icons
    var wrong = `<i class="fas fa-power-off"></i>`
     
    //Conditions..
    if (uname.value == undefined || uname.value == "") {
        unameErr.innerHTML = `${wrong} Enter Your name`
        unameErr.style.color = "red"
        unameDOM.style.border = "1px solid red"
        status = false//stop execution...
    }
    else if (!uname.value.match(/^[a-z]+$/)) {
        unameErr.innerHTML = `${wrong} Name must be Alphabets [a-z]...`
        unameErr.style.color = "red"
        unameDOM.style.border = "1px solid red"
        status = false
    }
    else {
        document.getElementById('uname_err').innerText = ""
        unameDOM.style.border = "1px solid #e5e5e5"
    }

    if (email.value == undefined || email.value == "") {
        emailErr.innerHTML = `${wrong} Enter Your Email`
        emailErr.style.color = "red"
        emailDOM.style.border = "1px solid red"
        status = false
    }
    else if (!email.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/)) {
        emailErr.innerHTML = `${wrong} Enter Valid Email name@domain.ext`
        emailErr.style.color = "red"
        emailDOM.style.border = "1px solid red"
        status = false
    }
    else {
        emailErr.innerText = ""
        emailDOM.style.border = "1px solid #e5e5e5"
    }



    if (pwd.value == undefined || pwd.value == "") {
        pwdErr.innerHTML = `${wrong} Enter Your Password`
        pwdErr.style.color = "red"
        pwdDOM.style.border = "1px solid red"
        status = false
    }
    else if (!pwd.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/)) {
        pwdErr.innerHTML = `${wrong} Pwd must be 1-uppercase, Lowercase, Number, SpecialCharacter`
        pwdErr.style.color = "red"
        pwdDOM.style.border = "1px solid red"
        status = false
    }
    else {
        pwdErr.innerText = ""
        pwdDOM.style.border = "1px solid #e5e5e5"
    }
    if (number.value == undefined || number.value == "") {
        numberErr.innerHTML = `${wrong} Enter Your number`
        numberErr.style.color = "red"
        numberDOM.style.border = "1px solid red"
        status = false//stop execution...
    }
    else if (!number.value.match(/^[0-9]+$/)) {
        numberErr.innerHTML = `${wrong} Name must be Numbers [0-9]...`
        numberErr.style.color = "red"
        numberDOM.style.border = "1px solid red"
        status = false
    }
   
    if (cpwd.value == undefined || cpwd.value == "") {
        cpwdErr.innerHTML = `${wrong} Enter Your Password`
        cpwdErr.style.color = "red"
        cpwdDOM.style.border = "1px solid red"
        status = false
    }
    else if (!cpwd.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/)) {
        cpwdErr.innerHTML = `${wrong} Pwd must be 1-uppercase, Lowercase, Number, SpecialCharacter`
        cpwdErr.style.color = "red"
        cpwdDOM.style.border = "1px solid red"
        status = false
    }
    else {
        cpwdErr.innerText = ""
        cpwdDOM.style.border = "1px solid #e5e5e5"
    }
    
    
    if (textarea.value == undefined || textarea.value == "") {
        textareaErr.innerHTML = `${wrong} Enter Your message`
        textareaErr.style.color = "red"
        textareaDOM.style.border = "1px solid red"
        status = false//stop execution...
    }
    else if (!textarea.value.match(/^[a-z]{50}+$/)) {
        textareaErr.innerHTML = `${wrong} Enter your message 50 characters`
        textareaErr.style.color = "red"
        textareaDOM.style.border = "1px solid red"
        status = false
    }
    else {
        document.getElementById('textarea_err').innerText = ""
        textareaDOM.style.border = "1px solid #e5e5e5"
    }
    if (select123.value == "select one option") {
        s1.innerHTML = "enter one option"
        s1.style.color = "red"
        select123.style.border = "1px solid red"
        status = false
    }
        else 
        {
            s1.innerText = ""
            select123.style.border = "1px solid #e5e5e5"
        }
        
        const btn = document.querySelector('#btn');
        // handle click button
        btn.onclick = function () {
            const rbs = document.querySelectorAll('input[name="choice"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            alert(selectedValue);
        }
        const accept = document.querySelector('#accept');
        // handle click button
        btn.onclick = function () {
            const rbs = document.querySelectorAll('input[name="choice"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            alert(selectedValue);
        }
        
 {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "file");
  document.body.appendChild(x);
}
    return status//true
}