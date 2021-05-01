console.log('This is project 4');
const name = document.getElementById('FirstName')
const Lname = document.getElementById('LastName')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
let validName = false 
let validLName = false 
let validEmail = false
let validPhone = false
$('#failure').hide();
$('#success').hide();
// console.log(name,email,phone);

name.addEventListener('blur', () => {
    console.log("name is blurred");
    //Validate name here
    let regex = /^[a-zA-Z]{2,20}$/
    let str = name.value;
    console.log(regex, str)
    if(regex.test(str)){
        console.log('Your name is valid');
        name.classList.remove('is-invalid')
        validName = true;
    }
    else{
        console.log("Your name is not valid");
        name.classList.add('is-invalid')
        validName = false 
    }
})
Lname.addEventListener('blur', () => {
    console.log("name is blurred");
    //Validate name here
    let regex = /^[a-zA-Z]{2,20}$/
    let str = Lname.value;
    console.log(regex, str)
    if(regex.test(str)){
        console.log('Your name is valid');
        Lname.classList.remove('is-invalid')
        validLName = true;
    }
    else{
        console.log("Your name is not valid");
        Lname.classList.add('is-invalid')
        validLName = false 
    }
})
email.addEventListener('blur', () => {
    console.log("email is blurred");
    //Validate email here
    let regex = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value;
    console.log(regex, str)
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid')
        validEmail = true;;
    }
    else{
        console.log("Your email is not valid");
        email.classList.add('is-invalid')
        validEmail = false;
    }
})
phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    //Validate phone here
    let regex = /^([0-9]){10}$/
    let str = phone.value;
    console.log(regex, str)
    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid')
        validPhone = true;
    }
    else{
        console.log("Your phone is not valid");
        phone.classList.add('is-invalid')
        validPhone = false;
    }
})
let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('You clicked on submit');
    // Submit your form here
    if(validName && validLName && validEmail && validPhone){
        console.log('Phone,email and username are valid.Submitting the form');
        let failure = document.getElementById('failure');
        success.classList.add('show')  
        // failure.classList.remove('show')  
        // $('#failure').alert('close')
        $('#failure').hide();
        $('#success').show();
    }
    else{
        console.log('One of phone,email and username are not valid.Hence not submitting the form');
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');
        failure.classList.add('show')  
        // success.classList.remove('show')
        // $('#success').alert('close');  
        $('#failure').show();
        $('#success').hide();
    }
})