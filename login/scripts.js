const form=document.getElementById("items");
const emailInput=document.getElementById("email");
const passwordInput=document.getElementById("password");
const signUp=document.getElementById("sign-up");

form.addEventListener("submit",function(e){
    e.preventDefault();

    const email=emailInput.value.trim();
    const password=passwordInput.value.trim();
    let valid=true;

    if(!validateEmail(email)){
        alert('لطفا یک ایمیل معتبر وارد کنید');
        valid=false;
    }

if(password.length < 6){
    alert('رمز عبور باید حداقل 6 کاراکتر باشد');
}
if(valid){
    alert('فرم با موفقیت ارسال شد');
}
});
function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}