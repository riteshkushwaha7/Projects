import React from 'react';
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import code from "../assets/img/CodeAdept 8.0.svg";
import register from "../assets/img/Register now.svg";
import './Banner2.css';

const Flag = () => {
  return (
    <div className="flag">
      <div className="content">
        <img src={logo} alt='logo' />
      </div>
      <div className='name'>
      <img src={code} alt='codeadept' />
      </div>
      <div className='btn'>
         <Link to="/register">
         <button><img src={register} alt='register' /></button>
         </Link>
      </div>
    </div>
  );
};

export default Flag;