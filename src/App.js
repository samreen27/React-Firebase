import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Create from './components/Create';
import Login from './components/Login';
import { db } from './fbConfig.js'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";

function App() {

    const [users, setUsers] = useState([])
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const usersCollectionRef = collection(db, "crud") //crud is the collection name

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef)
            //console.log(data)

            const docsRef = data.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            }))
            //console.log(docsRef)
            setUsers(docsRef)
        }
        getUsers()

    })

    const createUser = async() => {
        await addDoc(usersCollectionRef, {name:name, age: +age})
    }

    const updateAge = async(id,age) => {
        console.log(typeof age)
        const usersDoc = doc(db,"crud", id)
        const newAge=  {age:age + 5}
        await updateDoc(usersDoc, newAge)
        console.log(id, age)

         
    }
    const deleteUser = async(id) => {
        const usersDoc = doc(db,"crud", id)
        await deleteDoc(usersDoc)

    } 
    return ( 
    <div>
        <Create/>
        <Login/>
        <input type="text" placeholder="Name.." value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type='number' placeholder="Age.." value={age} onChange={(e)=>setAge(e.target.value)}/>
        <button onClick={createUser}>Create User</button>
        {users.map((user)=>{
            return <div>
                <h1>Name: {user.name} , Age: {user.age}</h1>
                <button onClick={()=>updateAge(user.id,user.age)}>Update Age</button>                
                <button onClick={()=>deleteUser(user.id)}>Delete</button>                
            </div>
        })}
    </div >
    ) 

}

export default App;
