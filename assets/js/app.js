function sendEmail(email) {

    // check is the email valid?
    if(email== "mizahma@siue.edu"){
        console.log("Email send!");
        return true;
    }
    return false;
}


function checkEmail(e) {
    e.preventDefault();
    //get value email input
    const email= document.querySelector(".email").value 
    const result= sendEmail(email);//result is value that backend returns
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

document.querySelector(".forgot-password-form").addEventListener("submit",checkEmail)