import getCurrentTime from '../utils/getCurrentTime.js';
import * as a from './actionsTypes.js';

export function addCurrentTime() {
  return {
    type: a.ADD_CURRENT_TIME,
    payload: getCurrentTime(),
  };
}

export function clearTimes() {
  return {
    type: a.CLEAR_ALL_TIMES,
  };
}
