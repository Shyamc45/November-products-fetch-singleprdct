import React from "react";
import { use } from "react";
import { useState } from "react";
import './style.css';

function LoginRegister() {
     function SwitchContent(){
        const content = document.getElementById('content');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        registerBtn.addEventListener('click',()=>{
            content.classList.add("active")
        });
        loginBtn.addEventListener('click',()=>{
            content.classList.remove("active")
        });
     }

         const[form, setForm]=useState({
             username:"",
             email:"",
             phonenumber:"",
             password:"",
         })

         const handlechange=(e)=>{ 
             const{name,value}=e.target;
             setForm({...form,[name]:value})
         }
        const handlesubmit = async (e) =>{

            e.preventDefault();
    
                const response = await fetch('http://localhost:5000/register/signup',{
                    method:"Post",
                    body:JSON.stringify(form),
                    headers: {
                        "Content-Type": "application/json"
                    },
                    mode:'cors'
                })
                const data = await response.json();
                console.log(data)
        }


        const[form1, setForm1]=useState({
            email:"",
            password:"",
        })

        const handlechange1=(e)=>{ 
            const{name,value}=e.target;
            setForm1({...form1,[name]:value})
        }
       const handlesubmit1 = async (e) =>{

           e.preventDefault();
   
               const response = await fetch('http://localhost:5000/login/signin',{
                   method:"Post",
                   body:JSON.stringify(form1),
                   headers: {
                       "Content-Type": "application/json"
                   },
                   mode:'cors'
               })
               const data = await response.json();
               console.log(data)
       }


    return(
        <div className='content justify-content-center align-items-center d-flex shadow-ig' id='content'>

            {/* {/------------Register form--------------/} */}


            <div className='col-md-6 d-flex justify-content-center'>
                <form onSubmit={handlesubmit}>
                    <div className='header-text mb-4'>
                        <h1>Create Account</h1>
                    </div>
                    <div className='input-group mb-3'>
                        <input name="username" type='text' placeholder='Name' className='form-control form-control-lg bg-lignt fs-6' onChange={handlechange} value={form.username}></input>
                    </div>
                    <div className='input-group mb-3'>
                        <input name="email" type='email' placeholder='Email' className='form-control form-control-lg bg-lignt fs-6' onChange={handlechange} value={form.email}></input>
                    </div>   
                    <div className='input-group mb-3'>
                        <input name="phonenumber" type='phone number' placeholder='Phone Number' className='form-control form-control-lg bg-lignt fs-6' onChange={handlechange} value={form.phonenumber}></input>
                    </div>
                    <div className='input-group mb-3'>
                        <input name="password" type='password' placeholder='Password' className='form-control form-control-lg bg-lignt fs-6' onChange={handlechange} value={form.password}></input>
                    </div>
                    <div className='input-group mb-3 justify-content-center'>
                        <button className='btn border-white text-white w-50 fs-6' type="submit">Register</button>
                    </div>
                </form>
            </div>

            {/* {/------------Login form--------------/} */}


            <div className='col-md-6 right-box'>
                <form onSubmit={handlesubmit1} >
                    <div className='header-text mb-4'>
                        <h1>Sign In</h1>
                    </div>
                    <div className='input-group mb-3'>
                        <input name="email" type='email' placeholder='Email' className='form-control form-control-lg bg-lignt fs-6' onChange={handlechange1} value={form1.email}></input>
                    </div>
                    {/* <div className='input-group mb-3'>
                        <input type='phone number' placeholder='Phone Number' className='form-control form-control-lg bg-lignt fs-6'></input>
                    </div> */}
                    <div className='input-group mb-3'>
                        <input name="password" type='password' placeholder='Password' className='form-control form-control-lg bg-lignt fs-6' onChange={handlechange1} value={form1.password}></input>
                    </div>
                    <div className='input-group mb-5 d-flex justify-content-between'>
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input'></input>
                            <label htmlFor='formcheck' className='form-check=label text-secondary'><small>Remember Me</small></label>
                        </div>
                        <div className='forgot'>
                            <small><a href='#'>Forgot password ?</a></small>
                        </div>
                    </div>
                    <div className='input-group mb-3 justify-content-center'>
                        <button className='btn border-white text-white w-50 fs-6' type="submit">Login</button>
                    </div>
                </form>
            </div>

            {/* {/-------------switch panel-------------/} */}


            <div className='switch-content'>
                <div className='switch'>
                    <div className='switch-panel switch-left'>
                        <h1>Hello, Again</h1>
                        <p>We are happy to see you back</p>
                        <button  className='hidden btn text-whiyte w-50 fs-6' id='login' style={{border:'1px solid white'}} onClick={SwitchContent}>Login</button>
                    </div>
                    <div className='switch-panel switch-right'>
                        <h1>Welcome</h1>
                        <p>Join Our Unique Platform, Explore a New Experience</p>
                        <button className='hidden btn border-white text-whiyte w-50 fs-6' id='register' onClick={SwitchContent}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginRegister;