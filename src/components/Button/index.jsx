import styles from "./styles.module.scss";

export const Button = ({ text, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {text}
    </button>
  );
};
