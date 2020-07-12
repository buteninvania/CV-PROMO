import React, {useState} from 'react'
import './App.css'
import Header from "./component/Header/Header"
import Nav from "./component/Nav/Nav"
import Hello from "./component/Content/Hello"
import {backHireMeActionCreator} from "./store/hired-reducer"

const App = ({state, dispatch}) => {

    const [welcomeState, setWelcomeState] = useState(true)
    const [developerState, setDeveloperState] = useState(false)
    const [projectsState, setProjectsState] = useState(false)

    const localState = {
        welcome: welcomeState,
        developer: developerState,
        projects: projectsState,
    }
    const onePage = () => {
        setWelcomeState(true);
        setDeveloperState(false);
        setProjectsState(false);
    }
    const secondPage = () => {
        setWelcomeState(false);
        setDeveloperState(true);
        setProjectsState(false);
    }
    const thirdPage = () => {
        setWelcomeState(false);
        setDeveloperState(false);
        setProjectsState(true);
    }

    if(state.isHireMe === false){
    return (
        <div>
            <div className={'app-wrapper'}>
                <Header/>
                <Nav state={localState} onePage={onePage} secondPage={secondPage} thirdPage={thirdPage}/>
                <div className={'app-wrapper-content'}>
                    <Hello dispatch={dispatch} localstate={localState} />
                </div>
                <div className={'rightBlock'}></div>
            </div>
        </div>
    )} return (
        <div>
            <button onClick={()=>{dispatch(backHireMeActionCreator())}}>Form</button>
        </div>
    )
}

export default App;

