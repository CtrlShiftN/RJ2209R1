import { DECREASE, INCREASE } from "./ActionConstant";
import { combineReducers } from "redux";

const initState = {
    count: 0
};

const reducers = (state = initState, actions) => {
    switch (actions.type) {
        case INCREASE:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREASE:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    initChange: reducers
});

export default rootReducer;