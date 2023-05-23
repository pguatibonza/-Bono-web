import React, { useState, useEffect } from 'react';

const Marvel = () => {
    const [marvel, setMarvel] = useState('');

    useEffect(() => {

            if(!navigator.onLine) {
                if(localStorage.getItem('marvel') === null){
                    setMarvel('Loading...');}
                else{
                    setMarvel(localStorage.getItem('marvel'));}
            }
            else{
                const ts='r8Z5vn3s';
                const apikey='37e752a8e215249c1b65ff6155116f74';
                const hash='bd403d913a93c5fc123a2857684ff4f9';
                const URL = 'https://gateway.marvel.com:443/v1/public/characters?ts='+ts+'&apikey='+apikey+'&hash='+hash;
                fetch(URL).then(res=>res.json()).then(res=>{
                    setMarvel(res.value);
                    localStorage.setItem("marvel", res.value);
                })
            }
    
      }, []);

    return (
        <div>
            <h2>Marvel</h2>
            <p>{marvel}</p>
        </div>
    );
}
export default Marvel;