import React from 'react'
import Task from './Task'

export const Tasks = ({ tasks, onDelete, onBookmarkClick }) => {
    return (
        <div>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onBookmarkClick={onBookmarkClick}
                />
            ))}
        </div>
    )
}
