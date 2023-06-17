import { useEffect } from 'react';
import './App.css';
import Login from './Login.js';
import {getTokenFromUrl} from './spotify'
import { useState } from "react";
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
 const spotify=new SpotifyWebApi();

function App() {
 

  const [token,setToken]=useState(null);
 //run based on condition
  useEffect(()=>{
      const hash=getTokenFromUrl();
      window.location.hash=""; //else access token will be visible in the url
      console.log("HASH: ",hash);
      const _token= hash.access_token;
      
      if(_token){
        setToken(_token);
        spotify.setAccessToken(_token)
        spotify.getMe().then(user=>{
          console.log("Human: ",user)
        })
      }
      console.log('Token :  ',token);
      
  },[]);

  return (
    <div className="app">
      {
          token ?(
           <Player/> ): (<Login/>)
          

      }
   

    </div>
  );
}

export default App;
