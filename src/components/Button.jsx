import React from 'react'

export const Button = ({ text, color, onClick }) => {
    return (
        <div>
            <button
                onClick={onClick}
                style={{ backgroundColor: color}}
                className='btn'
            >
                {text}
            </button>
        </div>
    )
}
