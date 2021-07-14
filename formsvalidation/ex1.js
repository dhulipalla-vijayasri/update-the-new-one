/* Form Handlings  */

var form_validations = () => {
    var name1 = document.querySelector('#Name').value


    var mail = document.querySelector('#Mail').value
    var number = document.querySelector('#Number').value
    var pwd = document.querySelector('Pwd').value
    var cpwd = document.querySelector('#Cpwd').value
   var number = document.querySelector('#number').value
  
   

    if (name1 == undefined || name1 == "") {
        document.getElementById('Name1').innerText = "Enter Name"
         return false
    }
    
    else if (mail == undefined || mail == "") {
        document.getElementById('mail1').innerText = "Enter Mail ID"
        return false
    }
    else if (number == undefined || number == "") {
        document.getElementById('number1').innerText = "Enter Phone Number"
        return false
    }
    
    else if (pwd == undefined || pwd == "") {
        document.getElementById('pwd1').innerText = "Enter Password"
        return false
    }
    else if (cpwd == undefined || cpwd == "") {
        document.getElementById('cpwd1').innerText = "Enter Confirm Password"
        return false
    }
    else if (pwd == cpwd) {
        window.alert("Both are Matched")
    }
    else {
        document.getElementById('confirm').innerText = "Both details are Not Matched"

        return false
    }
    

}