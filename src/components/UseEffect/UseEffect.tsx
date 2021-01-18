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

export const Clock = () => {
    const [seconds, setSeconds] = useState(new Date().getSeconds())
    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [hours, setHours] = useState(new Date().getHours())
    useEffect(() => {
        setInterval(() => {
            setSeconds(( ) => new Date().getSeconds())
        }, 1000)
    }, [])
    useEffect(() => {
        setInterval(() => {
            setMinutes(( ) => new Date().getMinutes())
        }, 1000)
    }, [])
    useEffect(() => {
        setInterval(() => {
            setHours(( ) => new Date().getHours())
        }, 1000)
    }, [])

    return <>
        Our time: {`${hours}:${minutes}:${seconds}`}
    </>
}