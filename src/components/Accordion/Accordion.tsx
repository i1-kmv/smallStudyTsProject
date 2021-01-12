import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
    items: Array<ItemType>
    onClick: (value:any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <>
            <AccordionTitle title={props.title} onClick={props.onChange}/>
            {props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>{props.title}</h3>
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value:any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) => {
                return <li key={index} onClick={() => props.onClick(i.value)}>{i.title}</li>
            })}
        </ul>
    )
}

