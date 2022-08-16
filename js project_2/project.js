
//contruction de page html and style 

let form = document.createElement('form');
let h1 = document.createElement('h1');
let username = document.createElement('input');
let password = document.createElement('input');
let confirmpass = document.createElement('input');
let register = document.createElement('button');
let body = document.querySelector('body');
h1.innerText = "Register Form";
username.type = "text";
password.type = "password";
confirmpass.type = "password";
register.innerText = "Register";
body.appendChild(form);
form.appendChild(h1);
form.appendChild(username);
form.appendChild(password);
form.appendChild(confirmpass);
form.appendChild(register);
h1.style.textAlign = 'center';
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.margin = '50px 20% 0 20%';
form.style.background = '#eee';
form.style.position = 'relative';
register.style.background = 'blue';
register.style.border = 'none';
register.style.borderRadius = '2px';
register.style.color = 'white';
username.classList.add("inputs")
password.classList.add("inputs")
confirmpass.classList.add("inputs")
register.classList.add("inputs")
let inputs = document.querySelectorAll(".inputs");
for(let i=0 ; i<4 ;i++ ){
    inputs[i].style.margin = "20px";
    inputs[i].style.padding= "10px";
}


//Q1: Add a label
let label1 = document.createElement('label');
let label2 = document.createElement('label');
let label3 = document.createElement('label');
form.appendChild(label1);
form.appendChild(label2);
form.appendChild(label3);
label1.innerText = 'UserName';
label2.innerText = 'Password';
label3.innerText = 'Confirm Your Password';
label1.style.position = "absolute";
label2.style.position = "absolute";
label3.style.position = "absolute";
label1.style.top = "75px";
label2.style.top = "155px";
label3.style.top = "235px";
label1.style.left = "4%";
label2.style.left = "4%";
label3.style.left = "4%";


//Q2 Q3 Q4 Q5 Q6: validation

const error1 = document.createElement('small');
form.appendChild(error1);
error1.style.position = 'absolute';
error1.style.top = '35%';
error1.style.left = '20px';
error1.style.color = 'red';
error1.innerText = "please set a username";
error1.style.display = 'none';


const error2 = document.createElement('small');
form.appendChild(error2);
error2.style.position = 'absolute';
error2.style.top = '55%';
error2.style.left = '20px';
error2.style.color = 'red';
error2.innerText = "please set a password";
error2.style.display = 'none';

const error3 = document.createElement('small');
form.appendChild(error3);
error3.style.position = 'absolute';
error3.style.top = '75%';
error3.style.left = '20px';
error3.style.color = 'red';
error3.innerText = "please confirm your password";
error3.style.display = 'none';

const pass = document.createElement('small');
form.appendChild(pass);
pass.style.position = 'absolute';
pass.style.top = '75%';
pass.style.left = '20px';
pass.style.color = 'red';
pass.innerText = "password does not match";
pass.style.display = 'none';

const sucsess = document.createElement('small');
form.appendChild(sucsess);
sucsess.style.position = 'absolute';
sucsess.style.top = '79%';
sucsess.style.left = '20px';
sucsess.style.color = 'green';
sucsess.innerText = "successful registration";
sucsess.style.display = 'none';

register.addEventListener('click',function(e){
    if(username.value == ''||password.value == ''||confirmpass.value == ''){
    e.preventDefault();
    if(username.value == ''){
        
        username.style.border = 'red solid 2px';
        error1.style.display = 'block';   
    }
    else{
        username.style.border = 'black solid 1px';
        error1.style.display = 'none'; 
    } 
    if(password.value == ''){
        
        password.style.border = 'red solid 2px';
        error2.style.display = 'block';   
    }
    else{
        password.style.border = 'black solid 1px';
        error2.style.display = 'none'; 
    } 
    if(confirmpass.value == ''){
        
        confirmpass.style.border = 'red solid 2px';
        error3.style.display = 'block';   
    }
    else{
        confirmpass.style.border = 'black solid 1px';
        error3.style.display = 'none'; 
    } 
    }else{
        if(password.value!=confirmpass.value){
            e.preventDefault();
            pass.style.display = 'block';
            confirmpass.style.border = 'red solid 2px';
            password.style.border = 'red solid 2px';

        }else{
            sucsess.style.display = 'block';
            pass.style.display = 'none';
            confirmpass.style.border = 'black solid 1px';
            password.style.border = 'black solid 1px';

        }
    }
    
});



   








































