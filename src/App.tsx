import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOf} from "./components/OnOf/OnOf";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolRating} from "./components/Rating/UncontrolRating";
import {Accordion} from "./components/Accordion/Accordion";






function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [mode, setMode] = useState(true)
    const items = [
        {title: 'item1', value: 'item1'},
        {title: 'item2', value: 'item2'},
        {title: 'item3', value: 'item3'}
        ]
    return (
        <div>
            <OnOf value={mode} setMode={() => setMode(!mode)}/>
            <PageTitle title={'This is a page'}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolRating/>
            <Accordion onClick={(value) => alert(value)} title={'Menu'} items={items} collapsed={accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
            <UncontrolledAccordion title={'Uncontrolled Accordion'}/>
        </div>
    );
}

function PageTitle(props:any){
    return <h1>{props.title}</h1>
}



export default App;
