import './App.css';
import { useState } from 'react';
import Main from './components/main/main';
import Navbar from './components/navbar/navbar';

function App() {

  const [isAuth, setisAuth] = useState(false);

  return (
    <div className="App">
      <Navbar isAuth={isAuth} />
      <Main setisAuth={setisAuth} isAuth={isAuth} />
    </div>
  );
}

export default App;
