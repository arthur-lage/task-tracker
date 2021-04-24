import React from 'react'
import { Button } from './Button'

export const Header = () => {

    function onClick(){
        console.log("Task Added")
    }

    return (
        <div className="header">
            <h1>Task Tracker</h1>
            <Button onClick={onClick} text="Add" color="var(--add-task)" />
        </div>
    )
}
