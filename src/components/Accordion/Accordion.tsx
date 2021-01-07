import React from "react";

type AccordionPropsType = {
    title:string
    collapsed: boolean
    onChange: () => void
}

function Accordion(props:AccordionPropsType) {
        return (
            <>
                <AccordionTitle title={props.title} onClick={props.onChange}/>
                {props.collapsed && <AccordionBody/>}
            </>
        )
    }

type AccordionTitlePropsType = {
    title:string
    onClick: () => void
}

function AccordionTitle(props:AccordionTitlePropsType){
    return   <h3 onClick={props.onClick}>{props.title}</h3>
}

function AccordionBody(){
    return   (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion