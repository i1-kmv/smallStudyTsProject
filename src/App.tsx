import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOf} from "./components/OnOf/OnOf";




function App() {
    return (
        <div>
            <OnOf mode={false}/>
            <PageTitle title={'This is a page'}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Users'} collapsed={true}/>
        </div>
    );
}

function PageTitle(props:any){
    return <h1>{props.title}</h1>
}



export default App;
