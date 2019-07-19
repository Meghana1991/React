import React from 'react'
import { useEffect } from 'react'

const Cockpit = (props) => {
    /**
     * I want the useEffect
     * to run only for the first
     * time
     */
    useEffect(() => {
        console.log('useEffect called')
        setTimeout(() => {
            //Immitating BE call here
            console.log("useEffect first")
        }, 100)
        /**
         * componentWillUnmount alternative
         */
        return () => {
            console.log('Cockpit clean up useEffect')
        }
    }, [])
    /**
     * If 2nd arg is not 
     * present, then the useEffect will be called on every prop change
     */
    useEffect(() => {
        console.log('useEffect called')
        setTimeout(() => {
            //Immitating BE call here
            console.log("useEffect general")
        }, 100)
    })

    /**
     * I want to do action only
     * on the persons change
     */
    // useEffect(() => {
    //     console.log('useEffect called')
    //     setTimeout(() => {
    //         //Immitating BE call here
    //         alert("response returned")
    //     }, 100)
    // }, [props.persons])

    return <div>
        <h1>Hi I am child text here</h1>
        <p>Yes!</p>
        <button
            onClick={props.clicked}>Toggle</button>
    </div>
}

export default Cockpit;