import React from 'react';
import ReactDOM from 'react-dom';

console.log("Hello");

function App() {
    return (
        <div className='text-[100px] pb-5 text-red-300'>Hello Worldd</div>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));

