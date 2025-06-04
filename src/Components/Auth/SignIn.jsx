import React from 'react'
import { useState } from 'react'
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../firebase"

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    function login(e){
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log(user);
            setError("");
            setEmail("");
            setPassword("");
        })
        .catch((error) => {
            console.log(error);
            setError("Аккаунт не найден")
        });
    }
  return (
    <div>
        <form>
            <h2>Войти</h2>
            <input placeholder="Введите почту"
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            />
            <input placeholder="Введите пароль"
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            />
            <button onClick={login}>Войти</button>
            {error ? <p style={{color:"red"}}>{error}</p> : ""}
        </form>
    </div>
  )
}

export default SignIn