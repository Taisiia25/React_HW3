import './style.css';
import React, {useState} from 'react';

const Result = ({ userData }) => {

    console.log(userData)
    return (
        <div className="container">
            <p className="step">Thank you for registration!</p>
            <img src={window.URL.createObjectURL(userData.photo)} alt="" />
            <h1 className='info-header'>Contact information</h1>
            <p className='info'>Name: {userData.user.name}</p>
            <p className='info'>Surname: {userData.user.surname}</p>
            <p className='info'>Email: {userData.user.email}</p>
            <p className='info'>City: {userData.adress.city}</p>
            <p className='info'>Street: {userData.adress.street}</p>
            <p className='info'>House number: {userData.adress.house}</p>
         </div>
    )
}

export default Result;