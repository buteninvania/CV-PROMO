import React from "react";
import {FirstPage} from "./Pages/FirstPageComponents";
import {SecondPage} from "./Pages/SecondPageComponents";
import {ThirdPage} from "./Pages/ThirdPageComponents";
import FaceSecondPagePhoto from './../../Img/PzNNt0JKOPo.jpg';
import FaceOnePagePhoto from './../../Img/I2WRc_mpc9E.jpg';


const Hello = (props) => {
    let urlImages = [
        FaceOnePagePhoto,
        FaceSecondPagePhoto,
    ];

    if (props.state.welcome) {
        return<FirstPage urlImages={urlImages} />
    } else if (props.state.developer) {
        return <SecondPage/>
    } else if (props.state.projects)
        return <ThirdPage />
}

export default Hello;