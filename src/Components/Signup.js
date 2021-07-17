// on the sign up ui page there will be options  for log in and sign up 
// here for sign up there will be a input for email,password,profile image AND PROFILE name
import React,{useState,useEffect,useContext} from 'react'
// we import authcontext as object as it was a object
import {AuthContext} from '../Context/AuthProvider'
// importing storage from firebase
import {storage,database} from '../firebase'

function Signup() {
// we created all the state requires for sign up page
let [email,setEmail] = useState('');
let [password,setPassword] = useState('');
let [name,setName] = useState('');
let [error,setError] = useState('');
let [loading,setLoading] = useState(false);
// we have to upolad a profile image while signing up so make a state for that
let [file,setFile] = useState(null);

// we import authcontext but it is a object so we require only sign up so we use destructuring 

 let {signup}=useContext(AuthContext);
 console.log(signup);

// it will call when a user click on submit button
// preventdefault will stop reloading the page while signing up

const handleSignup= async (e) =>{
      e.preventDefault();
      // before fetching the details we will set loading as true because for to load the page
      // we have to give uid to user which will be fetched from firebase so we will get the response by await 
      // as it is a async function we will drop it into try and catch it and
      try{
     setLoading(true);
     let response = await signup(email,password);
     let uid = response.user.uid;
     console.log(uid);
     // here we also have to upload our image to database and have to store it firebase gives alistner for that called uploadtasklistner 
     //it  will create storage where we  will put our file
     let uploadtasklistner = storage.ref(`user/${uid}/profile picture`).put(file);
     // uploadtasklistner provides 3 callback functions fn1,fn2,fn3
     //fn1--> to track how much mb or kb has been uploaded
     // fn-2---> to track error status called on time of failure due to some error
     // fn-3---> to track sucess status called on time of sucessfull completion

    uploadtasklistner.on('state changed',fn1,fn2,fn3);
    // fn1 for tracking progress of upload
    function fn1(snapshot){
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
    }
    function fn2(error){
         setError(error);
         setTimeout(() => {
             setError('')
         }, 2000);
         setLoading(false);
    }
    // it is a async function so we have add await while gettig url
   async  function fn3(){
        let downloadurl = await uploadtasklistner.snapshot.ref.getDownloadURL();
        console.log(downloadurl);
        await database.users.doc(uid).set({
            email:email, 
            userId:uid,
            username:name,
            createdAt:database.getCurrentTimeStamp(),
            profileUrl:downloadurl,
            postIds:[]

        })
// after user logged in we will stop loading
     setLoading(false);
     console.log('user has signed up');  
    }
     
}
catch(err) {
    setError(error);
    setTimeout(() =>
        setError('')
    , 2000);
    setLoading(false)
     }
}

// function for handling image while uploading if uploaded  file is  not null we will set our setFile as uploaded file
let handleImageChange=(e)=>{
    let file = e.target.files[0];
    console.log(file);
    if(file != null){
       setFile(file); 
    }
}
    return (
        <div>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="">username</label>
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
                <div>
                    <label htmlFor="profile">Profile Image</label>
                    <input type="file" accept='image/*' onChange={handleImageChange}></input>
                </div>
                <button type="submit" disabled={loading}>Login</button>

            </form>
            
        </div>
    )
}

export default Signup
