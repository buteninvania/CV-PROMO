import * as React from 'react';
import n from './Nav.module.css'

const Nav = (props) => {
    const onePageButton = () => {
        props.onePage();
    }
    const secondPageButton = () => {
        props.secondPage();
    }
    const thirdPageButtons = () => {
        props.thirdPage();
    }

   let onePage, secondPage, thirdPage = "";
    if (props.state.welcome){
        onePage = n.button
    } else if (props.state.developer) {
        secondPage = n.button
    } else if (props.state.projects) {
        thirdPage = n.button
    }
    return (
        <nav className={n.navItem}>
            <div><a onClick={onePageButton}><img className={onePage} src="https://img.icons8.com/ios/50/000000/filled-circle.png"/></a></div>
            <div><a onClick={secondPageButton}><img className={secondPage} src="https://img.icons8.com/ios/50/000000/filled-circle.png"/></a></div>
            <div><a onClick={thirdPageButtons}><img className={thirdPage} src="https://img.icons8.com/ios/50/000000/filled-circle.png"/></a></div>
        </nav>
    )
}

export default Nav;