import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ text, color, onClick, icon }) => {
    return (
        <div>
            <button
                onClick={onClick}
                style={{ backgroundColor: color}}
                className='btn'
            >
                {text}
                {icon}
            </button>
        </div>
    )
}

Button.defaultProps = {
    text: "Template Text",
    color: "green",
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}
