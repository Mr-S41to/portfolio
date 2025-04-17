import styles from "./WhiteText.module.css";

export default function WhiteText({ text }) {
    return (
        <p className={styles.text}>
            {text}
        </p>
    )
}