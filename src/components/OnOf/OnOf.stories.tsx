import React from "react"
import {action} from "@storybook/addon-actions"
import {OnOf} from './OnOf'

export default {
    title: 'OnOf stories',
    component: 'OnOf'
}

export const onMode = () => <OnOf value={true} setMode={() => {}}/>
export const ofMode = () => <OnOf value={false} setMode={() => {}}/>

