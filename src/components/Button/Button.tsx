import React from 'react'
import './Button.css'

interface TextButton {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

const Button: React.FC<TextButton> = ({ text, type = 'button', onClick }) => {
    return (
        <button className="button" type={type} onClick={onClick}>
            <div className="blob1"></div>
            <div className="blob2"></div>
            <div className="inner">{text}</div>
        </button>
    )
}

export default Button