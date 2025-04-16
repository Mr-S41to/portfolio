import styles from "./SubTitle.module.css";

export default function SubTitle({subTitle}) {
    return (
       <h2 className={styles.subTitle}>
           {subTitle}
        </h2>
    );
}