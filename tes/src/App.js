import React,{useEffect} from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MainRouter from './components/MainRouter';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';
import { AuthProvider } from "./contexts/AuthContext";




function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch])

  return (
    <AuthProvider>
    <div>
    <MainRouter/>
    </div>    
    </AuthProvider>

  );
}

export default App;
