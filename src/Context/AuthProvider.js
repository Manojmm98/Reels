import React,{useState,useEffect,useContext} from 'react'
import {auth} from '..firebase/'
// here we just create a context and intially we give default value as empty
const AuthContext= React.createContext()
function AuthProvider({children}) {
    // now set two ststefor currentuser and  loading State and intially there will be no user so currentuser is empty and loading is true
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

    return (
        <AuthContext.Provider value={value} >
            {!loading?children:''}
        </AuthContext.Provider>
    )
}

export default AuthProvider
