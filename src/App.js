import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import OneLinerComponent from './components/OneLinerComponent';
import MultiLinerComponent from './components/MultiLinerComponent';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Social from './components/Social';
import './App.css';

const App = () => {
  // logic to implement multiple pages of resume
  const reCalculatePages = () => {
    const maxHeight = 1122;
    const children = document.querySelector(".app-container").children;
    let currentHeight = 0;
    let container = document.createElement("div");
    container.className = "app-container";
    document.querySelector("#app").appendChild(container);

    for (let child of children) {
      if (currentHeight + child.clientHeight < maxHeight) {
        console.log(child.className)
      }
    }
  }

  return (
    <div id='app' className='app'>
      <div className='app-container'>
          <Header />
          <OneLinerComponent heading={'OBJECTIVE'} placeholder={'About me'} />
          <Skills heading={'SKILLS'} />
          <MultiLinerComponent heading={'ACADEMIC PROJECTS'} type={'academic'}/>
          <MultiLinerComponent heading={'PROFESSIONAL EXPERIENCE'} type={'professional'}/>
          <OneLinerComponent heading={'ACHIEVEMENTS'} placeholder={'Description'} />
          <Languages heading={'LANGUAGES'}/>
          <Social heading={'SOCIAL'} />
      </div>
      <div className='app-container'>
        <OneLinerComponent heading={'DECLARATION'} placeholder={'Date'} description={'Muhammad Waqar Shahid'} />
      </div>
    </div>
  );
}

export default App;
