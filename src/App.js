import React, { use, useState } from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import SignUp from './components/SingUp/SignUp';


function App() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [account, setAccount] = useState(() => {
    const savedAccount = localStorage.getItem('account');
    return savedAccount ? JSON.parse(savedAccount) : null;
  });

 
  console.log(account)

  const signUpOpen = () => {
    setIsSignUpOpen(true);
  };

  const handleClose = () => {
    setIsSignUpOpen(false);
  };

  const signUp = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      avatar: ''
    }
    localStorage.setItem('account', JSON.stringify(formData));
    handleClose();
    document.location.reload();
  }

  return (
    <div className="App">
      <Header signUpOpen={signUpOpen} account={account} />
      <Hero />
      <Projects />
      {isSignUpOpen && <SignUp handleClose={handleClose} signUp={signUp} />}
    </div>
  );
}

export default App;
