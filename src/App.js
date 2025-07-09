import React, { useState } from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import SignUp from './components/SingUp/SignUp';
import Profile from './components/Profile/Profile';

function App() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [account, setAccount] = useState(() => {
    const savedAccount = localStorage.getItem('account');
    return savedAccount ? JSON.parse(savedAccount) : null;
  });

  const signUpOpen = () => {
    setIsSignUpOpen(true);
  };

  const handleSignUpClose = () => {
    setIsSignUpOpen(false);
  };

  const handleProfileClose = () => {
    setIsProfileOpen(false);
  };

  const signUp = async (data) => {
    const { name, email, password, avatar } = data;

    let avatarBase64 = '';

    if (avatar) {
      avatarBase64 = await fileToBase64(avatar);
    }

    const formData = {
      name,
      email,
      password,
      avatar: avatarBase64,
      createdAt: new Date().toISOString()
    };

    localStorage.setItem('account', JSON.stringify(formData));
    setAccount(formData);
    handleSignUpClose();
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const deleteAccount = () => {
    localStorage.removeItem('account');
    setAccount(null);
    document.location.reload();
  };

  return (
    <div className="App">
      <Header signUpOpen={signUpOpen} account={account} openProfile={() => setIsProfileOpen(true)} />
      <Hero />
      <Projects />
      {isSignUpOpen && <SignUp handleClose={handleSignUpClose} signUp={signUp} />}
      {isProfileOpen && <Profile account={account} handleClose={handleProfileClose} deleteAccount={deleteAccount} />}
    </div>
  );
}

export default App;
