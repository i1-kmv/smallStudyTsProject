import React, {useState} from "react";



export function OnOf() {

    let [mode, setMode] = useState(true)

    let colorOn
    let colorOff
    let circleColor
     if (mode) {
         colorOn = 'green'
         circleColor = 'green'
     } else {
         colorOn = ''
     }

    if (!mode) {
        colorOff = 'red'
        circleColor = 'red'
    } else {
        colorOff = ''
    }



    return (
        <div style={{display: 'flex', alignItems:'center'}}>
            <div onClick={() => setMode(true)} style={{width: '50px', height: '50px', backgroundColor: colorOn, marginRight: '15px', border: '1px solid'}}>On</div>
            <div onClick={() => setMode(false)} style={{width: '50px', height: '50px', backgroundColor:colorOff, marginRight: '15px', border: '1px solid'}}>Off</div>
            <div style={{width: '20px', height: '20px',borderRadius: '50%',  backgroundColor: circleColor, border: '1px solid' }}></div>
        </div>
    )
}