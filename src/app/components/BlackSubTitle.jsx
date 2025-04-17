import styles from "./BlackSubTitle.module.css";

export default function BlackSubTitle({subTitle}) {
    return (
       <h2 className={styles.subTitle}>
           {subTitle}
        </h2>
    );
}