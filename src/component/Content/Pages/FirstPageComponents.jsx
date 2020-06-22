import h from "../Hello.module.css";
import React, {useState} from "react";
import {useSpring, animated} from "react-spring";
import {hireMeActionCreator} from "../../../store/redux-store";


export const FirstPage = (props) => {
    const styleOpacity = useSpring({
        from: {opacity: 0, padding: 10},
        opacity: 1,
        padding: 0
    })
    return (
        <animated.div style={styleOpacity} className={h.helloPage}>
            <WelcomeText/>
            <ButtonsCV dispatch={props.dispatch}/>
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
export const ButtonsCV = (props) => {
    let hireMe = () => {
        props.dispatch(hireMeActionCreator())
    }
    return (
        <div className={h.buttons}>
            <button className={h.file}>DOWNLOAD CV</button>
            <button onClick={hireMe}>HIRE ME</button>
        </div>
    )
}
export const PhotoContent = (props) => {

    return (
        <>
            <div className={h.mePhoto}>
                <div className={h.image}>
                        <ArrowImage urlImages={props.urlImages}/>
                    <ul>
                        <li><a href={"https://vk.com/butyafan"}><i className="fab fa-instagram"></i></a></li>
                        <li><a href={"https://vk.com/butyafan"}><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href={"https://vk.com/butyafan"}><i className="fab fa-twitter"></i></a></li>
                        <li><a href={"https://vk.com/butyafan"}><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href={"https://vk.com/butyafan"}><i className="fab fa-vk"></i></a></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

const ArrowImage = (props) => {
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
        <div className={h.imgBtn}>
            <img src={props.urlImages[count]}/>
            <div className={h.arrowsPhotoButton}>
                <button onClick={leftButton} disabled={(count <= 0) === true}>
                    <i className="fas fa-long-arrow-alt-left"></i>
                </button>
                <button onClick={rightButton} disabled={(count >= props.urlImages.length - 1) === true}>
                    <i className="fas fa-long-arrow-alt-right"></i>
                </button>
            </div>
        </div>
    )
}
