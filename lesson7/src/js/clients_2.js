import {applyMiddleware, createStore} from 'redux';


const reducer = (state = 0, action) => {
    if(action.type == 'INC'){
        return state+1;
    } else if(action.type == 'DEC'){
        return state-1;
    } else if(action.type == 'E'){
        throw new Error('AAAAHAHHHA');
    }
    return state;

}

// function logger(store){
//     return function(next){
//         return function(action){

//         }
//     }
// }

const logger = (store) => (next) => (action) => {
    console.log('action happened', action);
    next(action);
}

const error = (store) => (next) => (action) => {
    try {
        next(action);

    } catch(e) {
        console.log('AAAAAAA');
    }
}

const middlewares = applyMiddleware(logger, error);

const store = createStore(reducer, middlewares);

store.subscribe(() => {
    console.log('store изменился', store.getState());
})

store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'DEC'});
store.dispatch({type: 'DEC'});
store.dispatch({type: 'DEC'});