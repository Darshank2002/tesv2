import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route,BrowserRouter} from 'react-router-dom';
import LandingPage from './LandingPage';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import SingleUpload from './SingleUpload';
import ProfilePage from './ProfilePage';
import Upload from './Upload';
import Login from './Login';
import Signup from './Signup';
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import PrivacyPolicy from "../components/PrivacyPolicy"
import CookiePolicy from './CookiePolicy';
import About from './About';

function MainRouter(){
    const Landing = () =>{
        return(
            <LandingPage/>
        )
    }
    const HomePage = () =>{
        return(
            <Home/>
        )
    }
    const singleUpload = () =>{
        return(
            <SingleUpload />
        )
    }

    const profile = () =>{
        return(
            <ProfilePage/>
        )
    }

    const upload = () =>{
        return(
            <Upload/>
        )
    }

    const login = () =>{
        return(
            <Login/>
        )
    }

    const signup = () =>{
        return(
            <Signup/>
        )
    }
    const privacy = () =>{
        return(
            <PrivacyPolicy/>
        )
    }
    const cookie = () =>{
        return(
            <CookiePolicy/>
        )
    }
    const about = () =>{
        return(
            <About/>
        )
    }
    return(
        <div>
        <Header/>
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing}/>
            <PrivateRoute path="/home" component={HomePage}/>
            <PrivateRoute path="/content/:id" component={singleUpload}/>
            <PrivateRoute path="/profile/:uid" component={profile}/>
            <PrivateRoute path="/upload" component={upload}/>
            <Route path="/login" component={login}/>
            <Route path="/signup" component={signup}/>
            <Route path="/privacy" component={privacy}/>
            <Route path="/cookies" component={cookie}/>
            <Route path="/about" component={about}/>

        </Switch>
        </BrowserRouter>
        </div>
    )
}
export default MainRouter;