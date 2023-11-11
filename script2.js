//select dom element

const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

//Actin Indentifiers
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

//action creators

const increment = (value) =>{
    return{
        type: INCREMENT,
        payload: value
    }
}
const decrement = (value) =>{
    return{
        type: DECREMENT,
        payload: value
    }
}

//intial Sate
const initialValue = {
    value: 0,
};

//create Reducer Function
function counterReducer(state = initialValue, action){
    if(action.type === INCREMENT){
        return{
            ...state,
            value: state.value + action.payload,
        }
    }else if(action.type === DECREMENT){
        return{
            ...state,
            value: state.value - action.payload,

        }
    }else{
        return state;
    }
}

//create a store

const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
}
render();
store.subscribe(render);


//button click event lister


incrementEl.addEventListener('click', ()=> {
   store.dispatch(increment(5)) 
})
decrementEl.addEventListener('click', ()=> {
   store.dispatch(decrement(2)) 
})