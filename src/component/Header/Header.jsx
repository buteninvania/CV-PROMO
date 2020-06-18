import React from "react";
import h from "./Header.module.css"

const Header = (props) => {
    return (
        <div className={h.headerContent}>
            <div>CV PROMO</div>
            <span><img src="https://img.icons8.com/ios-filled/50/000000/menu-2.png"/></span>
        </div>
    )
}

export default Header;