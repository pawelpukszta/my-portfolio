import React from 'react';
import Navbar from './components/Navbar';
import Cta from './components/Cta';
import Projects from './components/Projects';

function App() {
  
  return (
    <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
      <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>
      <div className="relative bg-white shadow-lg sm:rounded-3xl">

        <div className="flex items-center justify-start pt-6 pl-6">
          <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
          <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
        </div>

        <div className="px-5 sm:px-20 py-6">
          <Navbar />
          <div className="content-container overflow-auto relative">
          <section
            id="about"
            className="content md:flex items-center bg-white dark:bg-gray-800 relative"
            
          >
            <Cta />
          </section>
          <section
            id="projects"
            className="content m-0 px-10 md:flex items-center"
          >
            <Projects />
          </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
