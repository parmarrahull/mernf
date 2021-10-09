import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { message, Button, Space } from 'antd';

const Signup = () => {

    const success = () => {
        message.success(' Registered successfuly');
      };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mo, setMo] = useState("");
    const [work, setWork] = useState("");
    const [password, setPassword] = useState("");


    const Register = async (e) => {
        e.preventDefault();
        let data = {
            name,
            email, 
            phone: mo,
            work,
            password,
        }
        console.log(data);
        try {
            const res = axios.post('http://localhost:8000/register', data);
            success();
            <Redirect to="/users" />
        } catch (err) {
            console.log('#################333', err)
        }
    }


    return (
        <>
            <p> Signup Page </p>
            <div>
                <div className='signup'>
                    <h1> Registration </h1>
                    <form onSubmit={Register}>
                        <div>
                            <input type="text" placeholder="Name" onChange={e=> setName(e.target.value)} /> <br />
                            <input type="text" placeholder="Email" onChange={e=> setEmail(e.target.value)} /> <br />
                            <input type="number" placeholder="Phone" onChange={e=> setMo(e.target.value)} /> <br />
                            <input type="text" placeholder="Work" onChange={e=> setWork(e.target.value)} /> <br />
                            <input type="password" placeholder="Password" onChange={e=> setPassword(e.target.value)} /> 
                        </div>
                        <div><br />
                            <button type="submit" className="sub_btn" > Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup;