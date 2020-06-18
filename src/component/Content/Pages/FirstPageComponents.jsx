import h from "../Hello.module.css";
import React, {useState} from "react";
import {useSpring, animated} from "react-spring";


export const FirstPage = (props) => {
    const styleOpacity = useSpring({
        from: {opacity:0, padding:10},
        opacity:1,
        padding:0
    })
    return (
        <animated.div style={styleOpacity} className={h.helloPage}>
            <WelcomeText/>
            <ButtonsCV/>
            <PhotoContent urlImages={props.urlImages}/>
        </animated.div>
    )
}

export const WelcomeText = () => {
    return (
        <div className={h.greeting}>
            <h1>Hello</h1>
            <div>I AM <br/> Butenin Ivan</div>
        </div>
    )
}
export const ButtonsCV = () => {
    return (
        <div className={h.buttons}>
            <button className={h.file}>DOWNLOAD CV</button>
            <button>HIRE ME</button>
        </div>
    )
}
export const PhotoContent = (props) => {
    const [count, setCount] = useState(0)
    const leftButton = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const rightButton = () => {
        if (count <= 0) {
            setCount(count + 1)
        }
    }
    return (
        <>
            <div className={h.mePhoto}>
                <img src={props.urlImages[count]}/>
            </div>
            <div className={h.arrowsPhotoButton}>
                <button disabled={(count <= 0) === true} onClick={leftButton}><i className="fas fa-long-arrow-alt-left"></i></button>
                <button disabled={(count >= props.urlImages.length - 1) === true} onClick={rightButton}><i className="fas fa-long-arrow-alt-right"></i></button>
            </div>
        </>
    )
}
