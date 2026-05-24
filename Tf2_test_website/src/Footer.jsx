import styles from "./App.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <p>© 2024 Digital Inventory Docs</p>
          <span className={styles.badge}>System Beta v1.0</span>
        </div>
      </div>
    </footer>
  );
};