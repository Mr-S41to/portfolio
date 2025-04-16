import styles from "./WhiteText.module.css";

export default function PurpleText({ text }) {
    return (
        <p className={styles.text}>
            {text}
        </p>
    )
}