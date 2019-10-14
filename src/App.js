import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TopNav from './components/layout/TopNav'


function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        {'App Here'}
      </div>
    </Router>
  );
}

export default App;
