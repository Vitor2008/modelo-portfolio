import React from 'react'
import './Button.css'

interface TextButton {
    text: string;
}

const Button: React.FC<TextButton> = ({ text }) => {
    return (
        <button className="button" type="submit">
            <div className="blob1"></div>
            <div className="blob2"></div>
            <div className="inner">{text}</div>
        </button>
    )
}

export default Button