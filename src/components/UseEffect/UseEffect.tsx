import React, {useEffect, useMemo, useState} from 'react'


function generateData() {
    console.log('GenerateData')
    return 35
}

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState<any>(generateData)
    const changer = (state: number) => {
        return state + 1
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

export const SetTimeoutExample1 = () => {
    console.log('setTimeoutExample1')
    const [counter, setCounter] = useState<any>(generateData)
    const changer = (state: number) => {
        return state + 1
    }

    useEffect(() => {

        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)

    }, [counter])


    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        {counter}
    </>

}

export const Timer = () => {
    console.log('setTimeoutExample1')
    const [counter, setCounter] = useState(0)

    useEffect(() => {

        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)

    }, [])


    return <>
        Timer: {counter}
    </>

}

const  getMinimumTwoNumbers = (num: number) => num < 10 ? '0' + num : num

export const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(( ) => new Date())
        }, 1000)

       return () =>  clearInterval(interval)
    }, [])



    return <>
        Our time: {`${getMinimumTwoNumbers(date.getHours())}:${getMinimumTwoNumbers(date.getMinutes())}:${getMinimumTwoNumbers(date.getSeconds())}`}
    </>
}