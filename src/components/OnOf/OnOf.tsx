import React, {useState} from "react";

type OnOfPropsTypes = {
    value: boolean
    setMode?: () => void
}

export function OnOf(props: OnOfPropsTypes) {



    let colorOn
    let colorOff
    let circleColor
     if (props.value) {
         colorOn = 'green'
         circleColor = 'green'
     } else {
         colorOn = ''
     }

    if (!props.value) {
        colorOff = 'red'
        circleColor = 'red'
    } else {
        colorOff = ''
    }



    return (
        <div style={{display: 'flex', alignItems:'center'}}>
            <div onClick={props.setMode} style={{width: '50px', height: '50px', backgroundColor: colorOn, marginRight: '15px', border: '1px solid'}}>On</div>
            <div onClick={props.setMode} style={{width: '50px', height: '50px', backgroundColor:colorOff, marginRight: '15px', border: '1px solid'}}>Off</div>
            <div style={{width: '20px', height: '20px',borderRadius: '50%',  backgroundColor: circleColor, border: '1px solid' }}></div>
        </div>
    )
}