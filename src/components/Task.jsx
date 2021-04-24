import React from 'react'
import { FaBookmark, FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onBookmarkClick }) => {
    return (
        <div className={`task ${task.reminder === true ? 'reminder' : ''}`}>
            
            <h3>
                {task.text} 
                <div className="task-buttons">
                    <FaBookmark
                        title="Bookmark this task"
                        style={{color: "var(--add-task)", cursor: 'pointer'}}
                        onClick={() => onBookmarkClick(task.id)}    
                    />
                    <FaTimes 
                        title="Delete this task"
                        style={{color: 'red', cursor: 'pointer'}} 
                        onClick={() => onDelete(task.id)}
                    />
                </div>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task;
