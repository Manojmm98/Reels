// on the sign up ui page there will be options  for log in and sign up 
// here for sign up there will be a input for email,password,profile image AND PROFILE name
import React,{useState,useEffect,useContext} from 'react'
// we import authcontext as object as it was a object
import {AuthContext} from '../Context/AuthProvider'

function Signup() {
// we created all the state requires for sign up page
let [email,setEmail] = useState('');
let [password,setPassword] = useState('');
let [name,setName] = useState('');
let [error,setError] = useState('');
let [loading,setLoading] = useState(false);



// we import authcontext but it is a object so we require only sign up so we use destructuring 

 let {signup}=useContext(AuthContext);
 console.log(signup);

// it will call when a user click on submit button
// preventdefault will stop reloading the page while signing up

const handleSignup= async (e) =>{
      e.preventDefault();
      // before fetching the details we will set loading as true because for to load the page
      // we have to give uid to user which will be fetched from firebase so we will get the response by await 
     setLoading(true);
     let response = await signup(email,password);
     let uid = response.user.uid;
     console.log(uid);
     setLoading(false);
}
    return (
        <div>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="">userName</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
                </div>

                <div>
                    <label htmlFor="">email</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                </div>

                <div>
                    <label htmlFor="">password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <button type="submit" disabled={loading}>Login</button>

            </form>
            
        </div>
    )
}

export default Signup
