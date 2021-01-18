import React, {useEffect, useMemo, useState} from 'react'



function generateData() {
    console.log('GenerateData')
    return 35
}

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState<any>(generateData)
    const changer = (state: number) => {
        return state+1
    }

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })


    useEffect(() => {
        console.log('useEffect only first render(componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect only first render every counter change')
        document.title = counter.toString()
    }, [counter])

   // const initValue = useMemo(generateData, [])

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        {counter}
        </>

}
