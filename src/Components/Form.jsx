import { useState } from "react";
import './Form.css'; 

const UserRegistration = () => {
    const [formdata, setformdata] = useState({
        name: '',
        email: '',
        password: '',
        profile_pic: ''
    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        setformdata({
            ...formdata,
            [name]: value
        });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: "POST",
                body: JSON.stringify(formdata),
                headers: {
                    "Content-Type": "application/json"
                },
                mode: 'cors'
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="register-container">
            <h1>User Registration Form</h1>
            <form onSubmit={handlesubmit}>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter your name" 
                    required 
                    value={formdata.name} 
                    onChange={handlechange} 
                />
                <label>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter your email" 
                    required 
                    value={formdata.email} 
                    onChange={handlechange} 
                />
                <label>Password</label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    required 
                    value={formdata.password} 
                    onChange={handlechange} 
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default UserRegistration;
