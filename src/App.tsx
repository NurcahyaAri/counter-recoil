import React from 'react';
import './App.css';

import { Body } from './components/body';
import { Viewconter } from './components/view_counter';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <nav>
          <Viewconter />
        </nav>
        <Body />
      </div>
    </RecoilRoot>
  );
}

export default App;
