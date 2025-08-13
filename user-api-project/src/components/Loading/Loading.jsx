import styles from './Loading.module.css';

export function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p>Carregando usuários...</p>
    </div>
  );
}