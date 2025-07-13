import React, { useState } from "react";
import "./SignUp.css";
import Backdrop from "../Backdrop/Backdrop";
import { IoClose } from "react-icons/io5";

const SignUp = ({ handleClose, signUp }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: null,
  });

  const [error, setError] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        avatar: file,
      }));
      setAvatarPreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({
        ...prev,
        avatar: null,
      }));
      setAvatarPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("All fields are required.");
      return;
    }
    setError("");
    signUp(formData);
  };

  return (
    <Backdrop className="backdrop signup">
      <form className="signup__modal" onSubmit={handleSubmit}>
        <button type="button" className="close" onClick={handleClose}>
          <IoClose />
        </button>
        <h2 className="signup__title">Sign Up</h2>
        <p className="signup__description">
          Please fill in the details below to create an local account.
        </p>
        <ul className="signup__list">
          <li className="signup__item">
            <label className="signup__label" htmlFor="name">
              Name
            </label>
            <input
              className="signup__input"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </li>
          <li className="signup__item">
            <label className="signup__label" htmlFor="email">
              Email
            </label>
            <input
              className="signup__input"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </li>
          <li className="signup__item">
            <label className="signup__label" htmlFor="password">
              Password
            </label>
            <input
              className="signup__input"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </li>
          <li className="signup__item">
            <label
              htmlFor="avatarInput"
              className="signup__avatar-label"
            >
              Upload Avatar
            </label>
            <input
              type="file"
              id="avatarInput"
              name="avatar"
              accept="image/*"
              onChange={handleAvatarChange}
            />
            {avatarPreview && (
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                className="signup__avatar-preview"
              />
            )}
          </li>
        </ul>
        {error && (
          <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
            {error}
          </p>
        )}
        <button type="submit" className="signup__button">
          Register
        </button>
      </form>
    </Backdrop>
  );
};

export default SignUp;
