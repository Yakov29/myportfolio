import React from "react";
import './Profile.css';
import Backdrop from "../Backdrop/Backdrop";
import { FaUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


const Profile = ({ account, handleClose, deleteAccount }) => {
    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    const avatar = account?.avatar;

    return (
        <Backdrop>
            <form className="profile__modal">
                <button type="button" className="close" onClick={handleClose}><IoClose /></button>

                <h2 className="profile__title">Welcome, {account?.name || "User"}</h2>
                <p className="profile__description">More information about your account will be displayed here.</p>
                <div className="profile__content">



                    <ul className="profile__info">
                        <li className="profile__info-item">Username: {account?.name || "N/A"}</li>
                        <li className="profile__info-item">Email: {account?.email || "N/A"}</li>
                        <li className="profile__info-item">Joined: {formatDate(account?.createdAt)}</li>
                    </ul>
                    <div className="profile__avatar">
                        {avatar && avatar.trim() !== "" ? (
                            <img className="profile__avatar-img" src={avatar} alt="Avatar" />
                        ) : (
                            <FaUser size={80} />
                        )}
                    </div>
                </div>
                {/* <button type="button" className="profile__edit">Edit Profile</button> */}
                <button type="button" className="profile__delete" onClick={deleteAccount}>Delete Account</button>
            </form>
        </Backdrop>
    );
};

export default Profile;
