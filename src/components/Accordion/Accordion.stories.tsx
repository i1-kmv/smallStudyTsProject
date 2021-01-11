import React, {useState} from "react"
import {action} from "@storybook/addon-actions"
import {Accordion} from './Accordion'

export default {
    title: 'Accordion stories',
    component: 'Accordion'
}

const callback = action('Accordion clicked')

export const UncollapsedMode = () => <Accordion title={'hello'} collapsed={false} onChange={callback}/>
export const CollapsedMode = () => <Accordion title={'good bye'} collapsed={true} onChange={callback}/>

export const AccordionChanging = () => {
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    return  <Accordion title={'Changing Accordoin'} collapsed={accordionCollapsed} onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
}
