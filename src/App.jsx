import React from 'react';
import {
  StarBackground,
  Header,
  Profile,
  CurrentRole,
  Timeline,
  ProjectCarousel,
  TechStack,
  LastPlayedSong,
  Footer
} from './components';

function App() {
  return (
    <div className="bg-true-black min-h-screen relative font-light">
      <StarBackground />
      
      <div className="mx-auto max-w-2xl px-4 py-8 relative z-10">
        <Header />
        <Profile />
        <CurrentRole />
        <Timeline />
        <ProjectCarousel />
        <TechStack />
        <LastPlayedSong />
        <Footer />
      </div>
    </div>
  );
}

export default App; 