import styles from "./BlackBoldText.module.css";

export default function BlackBoldText({ text }) {
    return (
        <p className={styles.text}>
            {text}
        </p>
    )
}