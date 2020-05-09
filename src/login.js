import React, {useState} from 'react';
import ReactDom from 'react-dom';

import axios from 'axios';

export default function Login(params) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        let isLog = false;
        try {
            let response = await axios.post(
                "https://reqres.in/api/login",
                {
                    email: email,
                    password: password
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            if (response.status === 200) {
                isLog = true;
            }
        } catch (e) {
            console.dir(e);
        }
        if (isLog) {
            localStorage.setItem('isLog', 'true');
            params.setIsLog(true);
        }
    }
    if(!params.isLog){
        return(
            <div className="LoginForm">
                <form onSubmit={handleSubmit}>
                    <label> Email:
                    <input type="email" onChange={e=>setEmail(e.target.value)}/>
                    </label>
                    <label>
                        Password:
                        <input type="password" onChange={e=>setPassword(e.target.value)}/>
                    </label>
                    <button type="submit">Se connecter</button>
                </form>
            </div>

        )
    } else {
        return (
            <div>
                Bienvenue.
                Vous êtes déjà connecté!
            </div>
        )
    }
}





