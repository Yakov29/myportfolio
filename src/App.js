import React, { useState } from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import SignUp from './components/SingUp/SignUp';

function App() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const signUpOpen = () => {
    setIsSignUpOpen(true);
  };

  const handleClose = () => {
    setIsSignUpOpen(false);
  };

  return (
    <div className="App">
      <Header signUpOpen={signUpOpen} />
      <Hero />
      <Projects />
      {isSignUpOpen && <SignUp handleClose={handleClose} />}
    </div>
  );
}

export default App;
