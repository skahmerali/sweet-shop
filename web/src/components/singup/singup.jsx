import React from 'react';
import './style.css';
 function Singup(){


    function signup(event) {
        event.preventDefault()




        var userName = document.getElementById('name').value
        var userEmail = document.getElementById('email').value.toLowerCase()
        var userPhone = document.getElementById('phone').value
        var userPassword = document.getElementById('password').value
    
        // console.log(userEmail)
    
        var userData = {
            userName: userName,
            userEmail: userEmail,
            userPhone: userPhone,
            userPassword: userPassword
        }
        // console.log(userData)
    
        
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("phone").value = ""
        document.getElementById("password").value = ""
        
        const Http = new XMLHttpRequest();
        Http.open("POST","http://localhost:5000/signup");
        // const url = "http://localhost:5000/signup";
        Http.setRequestHeader("Content-Type", "application/json");
    
        Http.send(JSON.stringify(userData));
    
        Http.onreadystatechange = (e) => {
            if (Http.readyState === 4) {
    
                const jsonResponse = JSON.parse(Http.responseText)
    
                if (jsonResponse.status === 200) {
                    alert(jsonResponse.message);
                    window.location.href="login.html";
                } else {
                    console.log(jsonResponse.status);
                    alert(jsonResponse.message);
                }
            }
        }
        return false;
    
    }











     return(
         <div className="main">
             <div className="head">
             <h1> Signup Form</h1>

             </div>
             <div className="form">
             <form onSubmit={signup}>
                 <label className="">
                     Name :  
                     <input type="text" id="name" placeholder="FULL NAME"/>
                 </label >
                 <label className=""> Email : 
                     <input type="text" id="email" placeholder="EMAIL"/>
                 </label>
                 <label className="">
                     Phone Number : 
                    <input type="text" id="phone" placeholder="   Phone Number"/>
                 </label>
                 <label className="">
                    Passsword:
                    <input type="password" id="password"placeholder="PASSWORD"/>
                 </label>
                 {/* <label className="">

                     Gender:
                 <select id="gen">
                     <option value="male">MALE</option>
                     <option value="female">Female</option>
                 </select>
                 </label> */}
                 <button>Signup</button>
             </form>

             </div>
         </div>
     )
 }
 export default Singup;