import React from 'react'
import '../../css/home.css'

export default function Home() {
  const logoutHandler=()=>{
    localStorage.removeItem('token')
    window.location.reload()
  }
  return (
    <div className="head" style={{fontSize:"25px",fontWeight:"bold" , display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"lightblue"}}>
      <p>Welcome to home page</p>
      <button onClick={logoutHandler} style={{fontSize:"25px",backgroundColor:"white",marginLeft:"20px",cursor:"pointer"}}>Logout</button>
      </div>
  
  )
}
