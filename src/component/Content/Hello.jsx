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
    if (props.localstate.welcome) {
        return<FirstPage dispatch={props.dispatch} urlImages={urlImages} />
    } else if (props.localstate.developer) {
        return <SecondPage/>
    } else if (props.localstate.projects)
        return <ThirdPage />
}

export default Hello

