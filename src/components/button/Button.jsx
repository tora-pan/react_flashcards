import React from 'react'
import "./button.styles.css";

const Button = ({func, btnText}) => {
    return (
        <div className="button" onClick={func}>
            {btnText}
        </div>
    )
}

export default Button
