import React,{useContext} from 'react'
import {Route,Redirect} from 'react-router-dom';
import AuthContext from './Context/AuthProvider'
// but there are three component came from private rout are exact,path and component here  we  store component as Component and other are stored in rest
function PrivateRoute({component:Component,...rest}) {
    let currentuser =useContext(AuthContext);
    // if i want to give authinacte to the actual user who have already signed up then we just took our routing component from feed 
    // if we want to give autnticate to our verified user then we just have to pass it in component and with props as below
    return (
        <Route {...rest} render={
            props =>{
                return currentuser?<Component {...props}/>:<Redirect to= '/login'/>;
            }
        }>
          

        </Route>
    )
}

export default PrivateRoute
