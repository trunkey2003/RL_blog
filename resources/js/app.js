import React from 'react';
import ReactDOM from 'react-dom';

console.log("Hello");

function Example() {

    return (
        <div className='text-[100px] pb-5 text-red-300'>Hello Worldd</div>
    );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
};
