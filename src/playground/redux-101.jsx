import { createStore } from 'redux';
import _ from 'lodash';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const SET = 'SET';
const RESET = 'RESET';

// Action generators
const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: INCREMENT,
        incrementBy: Math.abs(incrementBy),
    }
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: DECREMENT,
        decrementBy: Math.abs(decrementBy),
    }
};

const setCount = ({value = undefined} = {}) => {
    return {
        type: SET,
        value,
    }
}

const resetCount = () => {
    return {
        type: RESET,
    }
}

// Reducers
// 1. Reducers are pure functions
// 2. 

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + action.incrementBy };
        case DECREMENT:
            return { count: state.count - action.decrementBy };
        case SET:
            if (_.isNumber(action.value))
                return { count: action.value };
            else
                return state;
        case RESET:
            return { count: 0 };
        default: return state;
    }
    return state;
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(`${store.getState().count}`);
})

store.dispatch(incrementCount({incrementBy: 100}));
store.dispatch(incrementCount());
store.dispatch(decrementCount({decrementBy: 28}));
store.dispatch(decrementCount());
store.dispatch(setCount({value: 42} ));
store.dispatch(setCount());
store.dispatch(resetCount());
