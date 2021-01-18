import React, {useMemo, useState} from 'react'



function generateData() {
    console.log('GenerateData')
    return 35
}

export const Example1 = () => {
    console.log('Example1')

   // const initValue = useMemo(generateData, [])
    const [counter, setCounter] = useState<any>(generateData)
    const changer = (state: number) => {
        return state+1
    }


    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        {counter}
        </>

}
