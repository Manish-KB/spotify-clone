import React from 'react'
import "./Login.css";
import { loginUrl } from "./spotify";
function login() {
  return (
    <div className="login">
      login
     <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="Logo" />
      <a href={ loginUrl }>Login with Spotify</a>
     
     
      </div>
     
  )
}

export default login