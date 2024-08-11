import React, { useState } from 'react'
import {auth} from '../fbConfig'
import {createUserWithEmailAndPassword } from 'firebase/auth'
 

const Create = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const createAccount = (e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=> {
            console.log(userCredential)
            const user = userCredential.user;
        })
    }
  return (
    <div>
      <form onSubmit={createAccount} >
        <h1>Create a New Account</h1>
        <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default Create
