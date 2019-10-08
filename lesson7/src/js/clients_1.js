import {combineReducers, createStore} from 'redux';

const userReducer = (state = {name: 'Lev', age: 27}, action) => {
    switch(action.type){
        case 'CHANGE_NAME':
            return {...state, name: action.payload};
        case 'CHANGE_AGE':
            return {...state, age: action.payload};
    }
    return state;
}

const tweetsReducer = (state, action) => {
    return state;
}

const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
});

const store = createStore(reducers);

store.subscribe(() => {
    console.log('store изменился', store.getState());
})

store.dispatch({type: 'CHANGE_NAME', payload: 'Max'});
store.dispatch({type: 'CHANGE_AGE', payload: 28});