import React, {useState} from "react";



export function UncontrolRating() {

    const [value, setValue] = useState(0)

    console.log(value)

        return (
            <div>
                <Star value={value} onClick={() => setValue(1)} selected={value > 0}/>
                <Star value={value} onClick={() =>setValue(2)} selected={value > 1}/>
                <Star value={value} onClick={() =>setValue(3)} selected={value > 2}/>
                <Star value={value} onClick={() =>setValue(4)} selected={value > 3}/>
                <Star value={value} onClick={() =>setValue(5)} selected={value > 4}/>
            </div>
        )
}

type StarPropsType = {
    selected: boolean
    onClick: Function
    value: number
}

function Star(props: StarPropsType) {
    if (props.selected) {
        return <span onClick={()=>props.onClick(props.value)} style={{display:'inline-block', marginRight:'5px', cursor:'pointer'}}><b>star</b></span>
    } else {
        return <span onClick={()=>props.onClick(props.value)} style={{display:'inline-block', marginRight:'5px',cursor:'pointer'}}>star</span>
    }
}