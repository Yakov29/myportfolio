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

  const signUp = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      avatar: '',
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('account', JSON.stringify(formData));
    handleSignUpClose();
    document.location.reload();
  };

  return (
    <div className="App">
      <Header signUpOpen={signUpOpen} account={account} openProfile={() => setIsProfileOpen(true)} />
      <Hero />
      <Projects />
      {isSignUpOpen && <SignUp handleClose={handleSignUpClose} signUp={signUp} />}
      {isProfileOpen && <Profile account={account} handleClose={handleProfileClose} />}
    </div>
  );
}

export default App;
