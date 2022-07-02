import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { NoTask } from './NoTask'
import { Task } from './Task'

import styles from './Todo.module.css'

export function Todo() {
    const [taskList, setTaskList] = useState([
        'Integer urna interdum massa libero auctor neque turpis turpis semper.'
    ])
    const [inputText, setInputText] = useState('')
    const [tasksCompleted, setTasksCompleted] = useState(0)

    const numberOfTasks = taskList.length

    function handleNewTask(event: FormEvent) {
        event.preventDefault()
        setTaskList([...taskList, inputText])
        setInputText('')
    }

    function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
        setInputText(event.target.value)
    }

    function handleTaskCompletedCount(flag: Boolean) {
        if (flag === true) {
            setTasksCompleted(tasksCompleted + 1)
        }
        else {
            setTasksCompleted(tasksCompleted - 1)
        }
    }

    function handleDeleteTask(taskToDelete: string, flag: boolean) {
        const taskListWithoutTaskDeleted = taskList.filter((task) => {
            return task !== taskToDelete
        })
        setTaskList(taskListWithoutTaskDeleted)
        if (flag === true) {
            setTasksCompleted(tasksCompleted - 1)
        }
    }

    return (
        <main className={styles.container}>
            <form>
                <input 
                    className={styles.inputTask}
                    type="text" name="textTask" id="textTask" 
                    placeholder='Adicione uma nova tarefa'
                    value={inputText}
                    onChange={handleChangeInput}
                />
                <button type="submit" className={styles.addTask} onClick={handleNewTask}>
                    Criar <PlusCircle size={16} />
                </button>
            </form>

            <section className={styles.status}>
                <p>Tarefas criadas <span>{ numberOfTasks }</span></p>
                <p>Concluídas <span>{ tasksCompleted } de { numberOfTasks }</span></p>
            </section>
            <section>
                {numberOfTasks === 0 ?
                        <NoTask />
                    : taskList.map((task) => {
                    return (
                        <Task 
                            key={task} 
                            task={task} 
                            onTaskCompleted={handleTaskCompletedCount}
                            onDeleteTask={handleDeleteTask}
                        />
                        )
                    })
                }
                
            </section>
        </main>
    )
}