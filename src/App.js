import React, { use } from 'react';

// Секции
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  React.useEffect(() => {
    document.title = "My Portfolio";
  }, []);
  return (
    <div className="App">
      <Header/>
      <Hero/>
    </div>
  );
}

export default App;
