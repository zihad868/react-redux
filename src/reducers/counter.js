
const initialStage = {value: 0};

const counterReducer = (state=initialStage, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {value: state.value + 1};
        
        case 'DECREMENT':
            return {value: Math.max(state.value - 1, 0)};

        default:
            return state
    }
}


export default counterReducer;