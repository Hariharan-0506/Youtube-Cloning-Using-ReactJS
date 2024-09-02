import React from 'react';
import Sidebar from './Sidebar';
import VideoGrid from './VideoGrid';
import '../styles/App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <VideoGrid />
    </div>
  );
}

export default App;
