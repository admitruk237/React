import { addCurrentTime, clearTimes } from './redux/actionCreators.js';
import store from './redux/store.js';

const addTimeBtn = document.getElementById('addTime');
addTimeBtn.addEventListener('click', () => {
  store.dispatch(addCurrentTime());
});

const timeList = document.getElementById('timesList');

const clearTimesBtn = document.getElementById('clearTimes');

clearTimesBtn.addEventListener('click', () => {
  store.dispatch(clearTimes());
});

store.subscribe(() => {
  timeList.innerHTML = '';
  const times = store.getState();
  times.forEach((time) => {
    let li = document.createElement('li');
    li.innerText = time;
    timeList.appendChild(li);
  });
});

/* const unsubscribe = store.subscribe(() =>
  console.log(`Redux store just changed! ${store.getState()}`)
);

store.dispatch({
  type: 'ADD_CURRENT_TIME',
  payload: '11:30:00',
});
unsubscribe();
store.dispatch({
  type: 'ADD_CURRENT_TIME',
  payload: '11:32:00',
});

store.dispatch({
  type: 'CLEAR_ALL_TIMES',
});
 */
