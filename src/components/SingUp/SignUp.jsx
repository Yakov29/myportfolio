import React, { useState } from "react";
import "./SignUp.css";
import Backdrop from "../Backdrop/Backdrop";

import { IoClose } from "react-icons/io5";


const SignUp = ({ handleClose }) => {


    return (
        <Backdrop className="backdrop signup">
            <form className="signup__modal">
                <button type="button" className="close" onClick={handleClose}><IoClose /></button>
                <h2 className="signup__title">Sign Up</h2>
                <p className="signup__description">Please fill in the details below to create an account.</p>
                <ul className="signup__list">
                    <li className="signup__item">
                        <p className="signup__label" htmlFor="name">Name</p>
                        <input
                            className="signup__input"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                        />
                    </li>
                    <li className="signup__item">
                        <p className="signup__label" htmlFor="email">Email</p>
                        <input
                            className="signup__input"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                        />
                    </li>
                    <li className="signup__item">
                        <p className="signup__label" htmlFor="password">Password</p>
                        <input
                            className="signup__input"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                        />
                    </li>
                </ul>
                <button type="submit" className="signup__button">Register</button>
            </form>
        </Backdrop>
    );
};

export default SignUp;
