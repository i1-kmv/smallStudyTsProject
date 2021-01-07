import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOf} from "./components/OnOf/OnOf";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolRating} from "./components/Rating/UncontrolRating";






function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [mode, setMode] = useState(true)
    console.log(accordionCollapsed)
    return (
        <div>
            <OnOf value={mode} setMode={() => setMode(!mode)}/>
            <PageTitle title={'This is a page'}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolRating/>
            <Accordion title={'Menu'} collapsed={accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
            <UncontrolledAccordion title={'Uncontrolled Accordion'}/>
        </div>
    );
}

function PageTitle(props:any){
    return <h1>{props.title}</h1>
}



export default App;
