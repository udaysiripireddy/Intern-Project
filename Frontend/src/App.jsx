import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
function App() {
  
  return <>
  <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  </>
}

export default App
