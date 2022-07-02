import { Trash } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import styles from './Task.module.css'

interface TaskProps {
    task: string,
    onTaskCompleted: (taskCompleted: boolean) => void,
    onDeleteTask: (taskToDelete: string, flag: boolean) => void,
}

export function Task ({task, onTaskCompleted, onDeleteTask}: TaskProps) {
    let taskChecked = false;  // Flag to mark to checked

    function handleTaskCompleted(event: ChangeEvent<HTMLInputElement>) {
        onTaskCompleted(event.target.checked )
        taskChecked = event.target.checked
    }

    function handleTaskDelete() {
        onDeleteTask(task, taskChecked)
        console.log(taskChecked)
    }

    return (
        <div className={styles.task}>
            <input 
                type="checkbox" 
                className={styles.checked} 
                name="checked" id="checked" 
                onChange={handleTaskCompleted}
            />
            <p>{ task }</p>
            <button onClick={handleTaskDelete}>
                <Trash size={24}/>
            </button>
        </div>
    )
}