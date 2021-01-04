import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";




function App() {
    return (
        <div>
            <PageTitle title={'This is a page'}/>
            <Rating value={3}/>
            <Accordion title={'accordion title'}/>
        </div>
    );
}

function PageTitle(props:any){
    return <h1>{props.title}</h1>
}



export default App;
