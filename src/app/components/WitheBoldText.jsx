import styles from "./WhiteBoldText.module.css";

export default function WhiteBoldText({ text }) {
    return (
        <p className={styles.text}>
            {text}
        </p>
    )
}