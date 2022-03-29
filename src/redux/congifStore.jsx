import {createStore, combineReducers} from "redux"
import memo from "./modules/Memo"

//    리듀서 묶음                             리듀서 추가하는 곳
const rootReducer = combineReducers({memo});

const store = createStore(rootReducer);

export default store;
