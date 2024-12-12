
    const form =document.getElementById("items");
    const username =document.getElementById("User name");
    const email = document.getElementById("email");
    const password =document.getElementById("password");
    const confirmPassword =document.getElementById("confirm");
    const errorUsername =document.getElementById("error-username");
    const errorEmail=document.getElementById("error-email");
    const errorPassword =document.getElementById("error-password");
    const errorConfirm =document.getElementById("error-confirm");
    
    form.addEventListener("submit",(event)=>{
        let errors=false;
        errorUsername.textContent ="";
        errorEmail.textContent="";
        errorPassword.textContent="";
        errorConfirm.textContent="";


    if(username.value.trim() === ""){
     errorUsername.textContent="Please Enter Your Name" ;
     errorUsername.style.display="block";
     errors=true;
    }  else{
        errorUsername.style.display="none";
    }
    const email1 =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email && !email1.test(email)){
        errorEmail.textContent="Invalid email format";
        errorEmail.style.display="block";
        errors=true;
    }else{
        errorEmail.style.display ="none";
    }
    if(password.value.length < 6){
         errorPassword.textContent="Password must have at least 6 characters";
         errorPassword.style.display="block";
         errors=true;
    }else{
        errorPassword.style.display="none";
    }
    if(!confirmPassword)errors+="Confirm password is required";

    if(password.value !== confirmPassword.value){
        errorConfirm.textContent="Passwords do not match";
        errorConfirm.style.display="block";
        errors=true;
    }else{
        errorConfirm.style.display="none";
    }
    if(errors){
        event.preventDefault();
}
    });
