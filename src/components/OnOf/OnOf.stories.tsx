import React, {useState} from "react"
import {action} from "@storybook/addon-actions"
import {OnOf} from './OnOf'

export default {
    title: 'OnOf stories',
    component: 'OnOf'
}

const callback = action('on or off clicked')

export const onMode = () => <OnOf value={true} setMode={callback}/>
export const ofMode = () => <OnOf value={false} setMode={callback}/>

export const OnOfChanging = () => {
    const [value, setMode] = useState(false)
   return  <OnOf value={value} setMode={() => setMode(!value)}/>
}
