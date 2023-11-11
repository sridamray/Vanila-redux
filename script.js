//Select dom element

const conuterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementtEl = document.getElementById('decrement');
//increment decrement variable declare
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
//initial State Declare
const initailValue = {
    value:0,
};

//Create a Reducer Function

function counterReducer(state = initailValue, action){
    if(action.type=== INCREMENT){
        return{
            ...state,
            value: state.value + 1,
        }
    }else if(action.type=== DECREMENT){
        return{
            ...state,
            value: state.value - 1,
        }
    }else{
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    conuterEl.innerText = state.value.toString();
}

//Update UI initially
render();

store.subscribe(render);

// button click listeners
incrementEl.addEventListener("click", ()=>{
    store.dispatch({
        type: INCREMENT,
    });
});
decrementtEl.addEventListener("click", ()=>{
    store.dispatch({
        type: DECREMENT,
    });
});

