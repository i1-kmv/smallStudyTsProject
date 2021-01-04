import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            This is React App
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Accordion() {
    return (
        <>
            <h3>menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}

function Star() {
    return <div>star</div>
}

export default App;