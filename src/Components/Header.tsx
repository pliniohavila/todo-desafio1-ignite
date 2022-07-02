import styles from './Header.module.css'
import rocket from '../Assets/rocket.svg'

export function Header() {
    return (
        <header>
            <img src={rocket} alt='rocket'></img>
            <p className={styles.to}>to</p>
            <p className={styles.do}>do</p>
        </header>
    )
}