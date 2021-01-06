import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOf} from "./components/OnOf/OnOf";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";





function App() {
    return (
        <div>
            <OnOf/>
            <PageTitle title={'This is a page'}/>
            <Rating/>
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Users'} collapsed={true}/>
            <UncontrolledAccordion title={'Uncontrolled Accordion'}/>
        </div>
    );
}

function PageTitle(props:any){
    return <h1>{props.title}</h1>
}



export default App;
