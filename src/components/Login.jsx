import React, { useEffect, useState } from 'react'
import {auth} from '../fbConfig'
import {signInWithEmailAndPassword, signOut } from 'firebase/auth'
 

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const login = (e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=> {
            console.log(userCredential)
            const loggedInUser = userCredential.user;
            setUser(loggedInUser)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const logout = ()=>{
        signOut(auth).then(()=>{
            setUser(null)
            console.log('signout')
        }).catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            if(user){
                setUser(user)
            } 
            else{
                setUser(null)
            }
        });

        return () => unsubscribe()
    },[])
  return (
    <div>
      <form onSubmit={login} >
        <h1>Login to your Account</h1>
        <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Create</button>
      </form>
      {user ? (<> <p>Welcome {user.email}</p> 
                <button onClick={logout}>Log Out</button>
                </>) 
            : (<p>You are not logged in</p>)}
     
    </div>
  )
}

export default Login
