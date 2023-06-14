import React from 'react'
import back from  '../../assets/my-account.jpg'
import './Login.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

const Login = () => {
  return (
    <>
    <Navbar/>
    
    <div className='login'>
        <div className="containers">
            <div className="backImg">
                <img src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/04/12/1329/MUMGH-P0765-Inner-Courtyard-Hotel-Exterior-Evening.jpg/MUMGH-P0765-Inner-Courtyard-Hotel-Exterior-Evening.16x9.jpg" alt="" />
                <div className="text">
                    <h3>Login</h3>
                    <h1>My Account</h1>
                </div>
            </div>
            <form>
                <span>Username Or Email </span>
                <input type="email" required/>
                <span>Password</span>
                <input type="password" required/>
                <div class="wrap">
                   <button class="button">Submit</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login