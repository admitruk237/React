import styles from './TodoForm.module.css';
console.log(styles);

function TodoForm() {
  return (
    <form className={styles.form}>
      <input className={styles.input} placeholder="Enter new todo" />
      <button className={styles.button}>Submit</button>
    </form>
  );
}

export default TodoForm;
