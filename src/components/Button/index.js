import styles from './Button.module.css';

const Button = ({label, clickFn, classes}) => {
    return <button onClick={clickFn} className={`${styles.Button} ${classes}`}>{label}</button>
}

export default Button;