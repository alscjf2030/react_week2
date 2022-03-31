import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk";

import memo from "./modules/Memo"

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({memo});
//    리듀서 묶음                             리듀서 추가하는 곳


const store = createStore(rootReducer, enhancer);

export default store;
