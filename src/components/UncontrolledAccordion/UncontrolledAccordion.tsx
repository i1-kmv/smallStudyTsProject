import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}


export function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <>
            <AccordionTitle title={props.title} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {collapsed && <AccordionBody/>}
        </>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: Function
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <h3>{props.title}</h3>
            <span onClick={() => props.setCollapsed(!props.collapsed)}>(Open accordion)</span>
        </div>

    )
}

function AccordionBody() {
    return (
        <ul>
            <li>Hello</li>
            <li>My</li>
            <li>Dear Friend</li>
        </ul>
    )
}

