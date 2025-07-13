import React, { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import SignUp from './components/SingUp/SignUp';
import Profile from './components/Profile/Profile';
import ProjectData from './components/ProjectData/ProjectData';
import Demo from './components/Demo/Demo';

function App() {
  useEffect(() => {
    document.title = 'My Portfolio';
    document.documentElement.lang = 'en';
  }, []);

  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isProjectDataOpen, setIsProjectDataOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const [projectData, setProjectData] = useState(null);

  const [account, setAccount] = useState(() => {
    try {
      const savedAccount = localStorage.getItem('account');
      return savedAccount ? JSON.parse(savedAccount) : null;
    } catch (e) {
      return null;
    }
  });

  const signUpOpen = () => setIsSignUpOpen(true);
  const handleSignUpClose = () => setIsSignUpOpen(false);

  const handleProfileClose = () => setIsProfileOpen(false);

  const handleProjectDataClose = () => {
    setIsProjectDataOpen(false);
    setProjectData(null);
  };

  const handleDemoOpen = () => {
    setIsDemoOpen(true);

    console.log(projectData)
  }
  const handleDemoClose = () => setIsDemoOpen(false);

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

    try {
      localStorage.setItem('account', JSON.stringify(formData));
      setAccount(formData);
    } catch (e) {
      alert('Ошибка при сохранении данных. Проверьте настройки браузера.');
    }

    handleSignUpClose();
  };

  const fileToBase64 = (file, maxWidth = 100, maxHeight = 100) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;

          if (width > height && width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          } else if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          resolve(canvas.toDataURL('image/jpeg', 0.8));
        };
        img.onerror = (err) => reject(err);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const deleteAccount = () => {
    localStorage.removeItem('account');
    setAccount(null);
    setIsProfileOpen(false);
  };

  const openProjectData = (e) => {
    const target = e.currentTarget;
    const project = {
      title: target.dataset.title,
      description: target.dataset.description,
      image: target.dataset.img,
      link: target.dataset.link
    };
    setProjectData(project);
    setIsProjectDataOpen(true);
  };

  return (
    <div className="App">
      <Header signUpOpen={signUpOpen} account={account} openProfile={() => setIsProfileOpen(true)} />
      <Hero />
      <Projects openProjectData={openProjectData} />
      {isSignUpOpen && <SignUp handleClose={handleSignUpClose} signUp={signUp} />}
      {isProfileOpen && <Profile account={account} handleClose={handleProfileClose} deleteAccount={deleteAccount} />}
      {isProjectDataOpen && projectData && (
        <ProjectData handleClose={handleProjectDataClose} project={projectData} openDemo={handleDemoOpen} />
      )}
      {isDemoOpen && <Demo handleClose={handleDemoClose} project={projectData} />}
    </div>
  );
}

export default App;
