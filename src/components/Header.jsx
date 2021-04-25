import React from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'
import { Button } from './Button'

export const Header = ({ onAdd, isShowingAddTask }) => {
    return (
        <div className="header">
            <h1>Task Tracker</h1>
            <Button
                text={ isShowingAddTask ? "Cancel" : "Add"}
                color={ isShowingAddTask ? "red" : "var(--add-task)"} 
                onClick={onAdd} 
                icon={ isShowingAddTask ? <FaTimes style={{marginLeft: '.5rem'}} /> : <FaPlus style={{marginLeft: '.5rem'}} />} 
            />
        </div>
    )
}
