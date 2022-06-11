import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";

const HomePage = () => (
    <div>
        <h1>Home</h1>
    </div>
)
const ProfilePage = () => (
    <div>
        <h1>Profile</h1>
    </div>
)
const AboutPage = () => (
    <div>
        <h1>About</h1>
    </div>
)

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/profile" element={<ProfilePage/>} />
                <Route path="/about" element={<AboutPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));

