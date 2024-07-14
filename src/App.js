import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import React, { useState } from 'react';
import Todos from './Todos'
import Label from './Label'

function App() {
  const [labels, setLabel] = useState([]);
  return (
    <div>
      <Router>
        <h1 className='container' style={{backgroundColor:'#304ffe'}}>
          할 일 목록 앱
        </h1>
        <nav>
          <Link to="/" style={{ marginRight: '10px' }}>할일</Link>
          <Link to="/add">추가</Link>
          </nav>
      <Routes>
        <Route path="/" element={<Todos labels={labels} setLabel={setLabel} />} />
        <Route path="/add" element={<Label labels={labels} setLabel={setLabel} />} />
      </Routes>


      </Router>

    </div>
  );
}

export default App;
