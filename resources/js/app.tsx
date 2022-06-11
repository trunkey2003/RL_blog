import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';
import About from './components/About';

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));

