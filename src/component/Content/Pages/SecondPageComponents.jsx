import React from "react";
import {useSpring, animated, config} from "react-spring";


export const SecondPage = (props) => {
    return (
        <>
            <DeveloperText/>
        </>
    )
}

const DeveloperText = (props) => {
    const style = useSpring({
        config: config.stiff,
        to: [{color:'black',opacity:1,padding:20,}, {color: '#343131',opacity:1,padding:20,}],
        from: {opacity: 0, padding:0, color:"#231"},
        delay:200
        })
    return (
        <animated.div style={style}>
            I am a Front End developer.<br/>
            I use modern technologies of the powerful Javascript language.<br/>
            Mostly based on React development. Using the concept of pure functions.<br/>
            My projects are fully typed using TypeScript.
        </animated.div>
    )
}

