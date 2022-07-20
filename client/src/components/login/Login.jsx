import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../../css/login.css"
const Register = () => {

    const [credential,setCredential]=useState({email:"",password:""})
    const handleSubmit=async(e)=>{
        e.preventDefault();
       
        
            const response = await fetch(`http://localhost:5000/api/user/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                
              }, 
              body: JSON.stringify({email: credential.email, password: credential.password})
            });
            let json= await response.json()
          //  console.log(json)
           if(json.success===true){
            //    console.log("you are redirecting to main source");
            localStorage.setItem('token',json.authToken)
            window.location.reload()
           }
            else{
                alert("Invalid credentials");
            }
          }
          const onChange=(e)=>{
            setCredential({...credential,[e.target.name]:e.target.value});
            // console.log("onchange")
          }
        
    
  return (
    <div className="center">
    <h1>Login</h1>
    <form>
      

      <div className="login_Form">
        <label for="email">Email: </label>
        <input type="email" id="email" name="email" required onChange={onChange}/>
      </div>

      <div className="login_Form">
        <label for="password">Password: </label>
        <input type="password" id="password" name="password" onChange={onChange} />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
      <div className="signup">
          Need an Account? <Link id="signup_link" to="/Signup">Signup</Link>
      </div>
    </form>
  </div>
  )
}

export default Register