import React from "react";
import "./Hamburger.css";

function Hamburger({isOPen}) {
    return (
        <>
        <div className="hamburger">
            <div className={isOPen ? "bar" : "burger"}></div>
            <div className={isOPen ? "bar" : "burger"}></div>
            <div className={isOPen ? "bar" : "burger"}></div>
        </div>
        </>
    )
}

export default Hamburger;