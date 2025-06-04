import React from 'react'
import { useState } from 'react'
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../firebase"

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [copyPassword, setCopyPassword] = useState("");
    const [error, setError] = useState("");
    function register(e){
        e.preventDefault()
        if(copyPassword !== password){
            setError("Пароли не совпадают")
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log(user);
            setError("");
            setEmail("");
            setCopyPassword("");
            setPassword("");
        })
        .catch((error) => console.log(error));
    }
  return (
    <div>
        <form onSubmit={register}>
            <h2>Создать аккаунт</h2>
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
            <input placeholder="Введите пароль еще раз"
            value={copyPassword} 
            onChange={(e)=>setCopyPassword(e.target.value)}
            type="password"/>
            <button>Зарегистрироваться</button>
            {error ? <p style={{color:"red"}}>{error}</p> : ""}
        </form>
    </div>
  )
}

export default SignUp