import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Feed from './Components/Feed'
import AuthProvider from './Context/AuthProvider';
import Main from './MaterialUi/Main'
import Navbar from './MaterialUi/Navbar'
import UploadButtons from './MaterialUi/UploadButtons';
import Ioa from './Ioa'
// we have to show separate pages for login ,sign up and feed so use routing to do it
// we want our default page as feed so give exact to it
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <AuthProvider>
      <Switch>
      
      <Route exact path="/" component={Feed}></Route>

      <Route path='/login' component={Login}></Route>

      <Route path='/signup' component={Signup}></Route>


      </Switch>
      </AuthProvider>
    </Router>
      
  );
}

export default App;
