function sendEmail(email) {

    // check if the email is valid?
    if(email=== "admin@gamex.com"){
        console.log("Email send!");
        return true;
    }
    return false;
}

function checkEmail(e) {
    e.preventDefault();
    //get value email input
    const email= document.querySelector(".email").value 
    const result= sendEmail(email);//result is a value that backend returns
    if (!result) {
        document.querySelector(".error").innerText="Email is not correct!";
    } else {
       document.querySelector(".form-container").innerHTML=`
       <div class="send-email">
            <h1>We send  a email to you that includes reset password.
                check your email and click on the link.
            </h1>
            <a href="reset-password.html">click here to reset password</a>
        </div>
       `
    }
    
}


function checkOldPassword(password) {
    // check if the password is valid?
    if(password === "admin"){
        return true;
    }
    return false;
}

function resetPassword(e) {
    e.preventDefault();
    const oldPassword= document.querySelector(".old-password").value;
    const newPassword= document.querySelector(".new-password").value;
    const rePassword= document.querySelector(".re-password").value;

    //result is a value that backend returns
    const result= checkOldPassword(oldPassword);
    if (!result) {
        document.querySelector(".old-password-error").innerText="Old password is not correct!";
        return;
    }
    else{
        document.querySelector(".old-password-error").innerText="";
    }
    if (newPassword!==rePassword) {
        document.querySelector(".re-password-error").innerText="Passwords do not match!";
        return;
    }else{
        document.querySelector(".old-password-error").innerText="";
    }

    document.querySelector(".form-container").innerHTML=`
    <div class="send-email">
         <h1 class="success">
            Your Password changed successfully.
         </h1>
         <a href="index.html">Back To Dashboard</a>
     </div>
    `

}

const forgotPasswordForm=document.querySelector(".forgot-password-form")
if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener("submit",checkEmail)
}
const resetPasswordForm=document.querySelector(".reset-password-form")
if (resetPasswordForm) {
    resetPasswordForm.addEventListener("submit",resetPassword)
}
