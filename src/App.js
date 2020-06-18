import React, {useState} from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Hello from "./component/Content/Hello";


const App = (props) => {

    const [welcomeState, setWelcomeState] = useState(true)
    const [developerState, setDeveloperState] = useState(false)
    const [projectsState, setProjectsState] = useState(false)

    let state = {
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

    return (
        <div>
            <div className={'app-wrapper'}>
                <Header/>
                <Nav state={state} onePage={onePage} secondPage={secondPage} thirdPage={thirdPage}/>
                <div className={'app-wrapper-content'}>
                    <Hello state={state} />
                </div>
                <div className={'rightBlock'}></div>
            </div>
        </div>
    )
}

export default App;
