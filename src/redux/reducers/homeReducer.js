/*Variables section*/
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";

/*Initial state*/

const initialState = {
  title: "Hello from Home Reducer",
  counter: 0,
};

/*Reducer*/

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return {
        ...state, counter: state.counter+1
      }
    }
    case SUBTRACT: {
      return {
        ...state, counter: state.counter-1
      }
    }
    default:
      return state;
  }
};

/*Action creators*/

export const addCountAC = () => {
    return {
      type: ADD
    }
};

export const subCountAC = () => {
    return {
      type: SUBTRACT
    }
};

export default homeReducer;