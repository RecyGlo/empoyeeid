import './App.css';
import Htet from './Htet';
import Heinhtet from './Heinhtet';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Htet />} />
        <Route path="okka" element={<Htet />} />
        <Route path="heinhtet" element={<Heinhtet />} />
      </Routes>
    </div>
     
  );
}

export default App;
