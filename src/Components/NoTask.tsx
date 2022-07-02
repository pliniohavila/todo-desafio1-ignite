import styles from './NoTask.module.css'
import clipboard from '../Assets/Clipboard.svg'

export function NoTask() {
    return (
        <div className={styles.noTask}>
            <img src={clipboard} alt="Clipboard" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}