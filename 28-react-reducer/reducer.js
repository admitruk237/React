const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_NAME':
      return [...state, action.payload];
    case 'DELETE_NAME':
      return state.filter((personName) => personName !== action.payload);
    case 'CLEAR_NAMES':
      return [];
    default:
      return state;
  }

  /*   if (action.type === 'ADD_NAME') {
    return [...state, action.payload];
  }
  if (action.type === 'DELETE_NAME') {
    return state.filter((personName) => personName !== action.payload);
  }
  if (action.type === 'CLEAR_NAMES') {
    return [];
  }
  return state; */
}

let newState = reducer(initialState, { type: 'ADD_NAME', payload: 'Andrii' });
console.log(newState);

let newState2 = reducer(newState, { type: 'ADD_NAME', payload: 'Oleg' });
console.log(newState2);

let newState3 = reducer(newState2, { type: 'DELETE_NAME', payload: 'Oleg' });
console.log(newState3);

let newState4 = reducer(newState3, { type: 'CLEAR_NAMES' });
console.log(newState4);

let newState5 = reducer(newState4, { type: 'ADD_NAME', payload: 'Andrii' });
console.log(newState5);

let newState6 = reducer(newState5, { type: 'ADD_NAME', payload: 'Oleg' });
console.log(newState6);
