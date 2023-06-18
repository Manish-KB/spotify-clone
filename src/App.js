import { useEffect } from 'react';
import './App.css';
import Login from './Login.js';
import { getTokenFromUrl } from './spotify'
import { useState } from "react";
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue(); // used to get data from data layer

  //run based on condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; //else access token will be visible in the url
    console.log("HASH: ", hash);
    const _token = hash.access_token;

    if (_token) {
      // setToken(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
        // console.log(playlists);
      })
    }


  }, []);
  https://youtu.be/pnkuI8KXW_8?t=8179
  // console.log("Human: ",user)
  // console.log('Token :  ',token);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify />) : (<Login />)


      }


    </div>
  );
}

export default App;
