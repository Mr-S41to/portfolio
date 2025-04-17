import styles from "./BlackText.module.css";

export default function BlackText({ text }) {
    return (
        <p className={styles.text}>
            {text}
        </p>
    )
}