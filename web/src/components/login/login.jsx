import React from 'react';
import './style.css';
 function Login(){



    
function login(event) {

    event.preventDefault()
    var loginEmail = document.getElementById('loginEmail').value
    var loginPassword = document.getElementById('loginPassword').value

    console.log(loginEmail, loginPassword)


    const Http = new XMLHttpRequest();
    // const url = "http://localhost:3000/login"
    Http.open("POST",  "http://localhost:5000/login")
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({
        email: loginEmail,
        password: loginPassword
    }));


    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4) {

            // console.log(Http.responseText);
            const jsonResponse = JSON.parse(Http.responseText)
            if (jsonResponse.status === 200) {
                alert(jsonResponse.token);
                console.log(jsonResponse.token)
                localStorage.setItem("token", jsonResponse.token)
                window.location.href="home.html";
            } else {
                alert(jsonResponse.message);
            }
        }
    }

    return false;

}





     return(
         <div className="main">
             <div className="head">
             <h1> Login Form</h1>

             </div>
             <div className="form">
             <form onSubmit={login}>
                
                 <label className=""> Email :  
                     <input type="text" id="loginEmail" placeholder="EMAIL"/>
                 </label>
               
                 <label className="">
                    Passsword : 
                    <input type="password" id="loginPassword" placeholder="PASSWORD"/>
                 </label>
               <button>Login</button>
             </form>

             </div>
         </div>
     )
 }
 export default Login;