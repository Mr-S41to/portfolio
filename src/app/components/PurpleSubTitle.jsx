import styles from "./PurpleSubTitle.module.css";

export default function PurpleSubTitle({subTitle}) {
    return (
       <h2 className={styles.subTitle}>
           {subTitle}
        </h2>
    );
}