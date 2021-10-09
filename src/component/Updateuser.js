import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";                                                                                      
import { useHistory } from "react-router-dom";

const Updateuser = (props) => {
    const history = useHistory();
    useEffect(async() => {
        
        const res = await axios.get(`http://localhost:8000/getuser/${id}`)
        const user = res.data[0];
        setName(user.name);
        setEmail(user.email);
        setMo(user.phone);
        setWork(user.work);
    }, [])
    const [id, setId ] = useState(props.match.params.id);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mo, setMo] = useState("");
    const [work, setWork] = useState("");

    const Update = async (e) => {
        e.preventDefault();
        let data = {
            id,
            name,
            email,
            phone:mo,
            work
        }
        try {
            const res = await axios.put('http://localhost:8000/update', data);
            history.push('/users');
        }   catch (error) {
            console.log(error);
        }
    }

    
    return(
        <>
            <div>
                <div className='signup'>
                    <h1> Update </h1>
                    <form onSubmit={Update}>
                        <div>
                            <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} defaultValue={name} /> <br/>
                            <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} defaultValue={email} /> <br />
                            <input type='number' placeholder='Phone' onChange={(e) => setMo(e.target.value)} defaultValue={mo} /> <br />
                            <input type='text' placeholder='Work' onChange={(e) => setWork(e.target.value)} defaultValue={work} /> 
                        </div>
                        <div><br />
                            <button type="update" className="sub_btn"> Update </button>
                        </div>
                    </form>                    
                </div>
            </div>
        </>
    )
} 

export default Updateuser;