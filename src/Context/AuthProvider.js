import React,{useState,useEffect,useContext} from 'react'
import {auth} from '../firebase'
// here we just create a context and intially we give default value as empty
export const AuthContext= React.createContext()
// we pass children here as a props and when we call it through authprovider we will get the value which is given by usecontext
function AuthProvider({children}) {
    // now set two state for currentuser and  loading State and intially there will be no user so currentuser is empty and loading is true because
    // we want childrens of auth provider to run after 1st render
    const [currentuser,setCurrentUser]=useState();
    const [loading,setLoading]=useState(true);

     // in the logn in page we have to perform three opreation log in,sign up so we have to create these functions

     // function for sign up for sign up it will take input as emaild and password and will return that email and password to database
     function signup(email,password){
          return auth.createUserWithEmailAndPassword(email,password);
     } 
     // function for log in
     function login(email,password) {
         return auth.signInWithEmailAndPassword(email,password);
     }
    // function for logout
    function logOut(){
        return auth.signOut();
    }
    // we want to add only componentsdidmount so we use useeffect to check changes in user's log in state
    // to unsubscribe a user we used a function onauthstatuschange which set the current user as user
    // here we use unmount as unsubscribe on return statment to preserve that state  untill a certain time for eg.. if a user  logged in and close the tab then untill a certain time it will remain logged in
    useEffect(() => {
        const unsubscribe =auth.onAuthStateChanged(user=>{
            setCurrentUser(user);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])
    // here we are creating a variable value where we store our currentuser,login,signup as value and we will use it in context provider
    const value ={
        currentuser,
        login,
        signup,
        logOut
    }
    // if there is not loading ocuur that  means we will show our log in page at that time othewise blank
   // here we render the children which is passed through authcontext and we will get that value
    return (
        <AuthContext.Provider value={value} >
            {!loading?children:''}
        </AuthContext.Provider>
    )
}

export default AuthProvider
