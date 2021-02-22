import React from 'react';
import API from '../API';
import './Login.css';

export default ({onReceive}) =>  {

    const handleFacebookLogin = async () => {
        
        let result = await API.fbPopup()

        if (result) {
            onReceive(result.user)
        } else {
            alert("Ops!Não conseguimos realizar seu login com Facebook!");
        }
    }
    
    return (
        <div className='login'>
            <button onClick={handleFacebookLogin}>Login com FaceBook</button>
        </div>

)}