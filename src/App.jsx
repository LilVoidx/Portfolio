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

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
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