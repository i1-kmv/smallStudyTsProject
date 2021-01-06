import React from "react";



type OnOfPropsType = {
    mode: boolean
}

export function OnOf(props:OnOfPropsType) {

    let colorOn
    let colorOff
    let circleColor
     if (props.mode) {
         colorOn = 'green'
         circleColor = 'green'
     } else {
         colorOn = ''
     }

    if (!props.mode) {
        colorOff = 'red'
        circleColor = 'red'
    } else {
        colorOff = ''
    }



    return (
        <div style={{display: 'flex'}}>
            <div style={{width: '50px', height: '50px', backgroundColor: colorOn, marginRight: '15px', border: '1px solid'}}>On</div>
            <div style={{width: '50px', height: '50px', backgroundColor:colorOff, marginRight: '15px', border: '1px solid'}}>Off</div>
            <div style={{width: '50px', height: '50px',borderRadius: '50%',  backgroundColor: circleColor, border: '1px solid' }}></div>
        </div>
    )
}