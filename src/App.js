import React from 'react';

import Login from './Login';


const App = () => {
  return (
    <div className="app-container">
      {/* Include your food picture here */}
      <div className="background-image"></div>

      {/* Render Login and SignUp components */}
      <Login />
      
    </div>
  );
};

export default App;