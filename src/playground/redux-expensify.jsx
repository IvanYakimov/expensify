import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const ADD_EXPENSE = 'ADD_EXPENSE';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0 } = {}) =>
    ({
        type: ADD_EXPENSE,
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt,
        }
    });

const removeExpense = ({
        id = undefined } = {}) =>
    ({
        type: REMOVE_EXPENSE,
        id,
    });

// 
const defaultExpences = [];
const defaultFilters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
};

const expensesReducer = (state = defaultExpences, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            return [...state, action.expense];
        case REMOVE_EXPENSE:
            return state.filter(({id}) => id !== action.id);
        default: return state;
    }
};

const filtersReducer = (state = defaultFilters, action) => {
    switch (action.type) {
        default: return state;
    }
}

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
    }));

store.subscribe(() => {
    console.log(store.getState());
});

const rent = store.dispatch(addExpense({ description: 'rent', amount: 10000 }));
const coffee = store.dispatch(addExpense({ description: 'coffee', amount: 15000 }));

console.log(rent.expense.id);
console.log(coffee);

store.dispatch(removeExpense({ id: rent.expense.id }));


const user = {
    name: 'Jen',
    age: 18,
}

console.log(...user);
