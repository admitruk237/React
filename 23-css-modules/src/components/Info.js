import './Info.css';
import styles from './Info.module.css';
console.log(styles);
/* 
{
    "info": "Info_info__zmb1Y",
    "myOtherButton": "Info_myOtherButton__mN0mI"
}
*/
function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component</h1>
      <h2>Heading in the info component</h2>
      <button className="my-button">Click me in the info component</button>
      <br />
      <button className={styles.myOtherButton}>
        Button with the local CSS styles
      </button>
    </div>
  );
}

export default Info;
