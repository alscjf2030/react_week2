// Memo.js
import {db} from"../../firebase"
import {collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc} from "firebase/firestore"

// Actions
const LOAD = 'memo/LOAD'
const CREATE = 'memo/CREATE';
const COMPLETED = 'memo/COMPLETED';
const DELETE = 'memo/DELETE';

// 초기값
const initialState = {
    list: []
}

// Action Creators
export function loadMemo(memo_list){
    return {type: LOAD, memo_list: memo_list};
}


export function createMemo(memo) {
    return { type: CREATE, memo: memo};
}

export function completedMemo(memo_index){
    return {type: COMPLETED, memo_index: memo_index}
}

export function deleteMemo(memo_index){
    return {type: DELETE, memo_index: memo_index};
}

//middlewares
export const loadMemoFB = () => {
    return async function (dispatch) {
        const memo_date = await getDocs(collection(db, "Week2"));
        // console.log(memo_date)

        let memo_list = [];

        memo_date.forEach((m) => {
            // console.log(m.data())
            memo_list.push({id:m.id, ...m.data()})
        })
        // console.log(memo_list);

        dispatch(loadMemo(memo_list))
    }
}

export const addMemoFB = (memo) => {
    return async  function (dispatch) {
        const docRef = await addDoc(collection(db, "Week2"), memo);
        const _memo = await getDoc(docRef);
        const memo_data = {id: _memo.id, ..._memo.data()};
        // console.log(memo_data)

        dispatch(createMemo(memo_data))
        // console.log((await getDoc(docRef)).data())

    }
}

export const completedMemoFB = (memo_id) => {
    return async function (dispatch, getState) {
        const docRef = doc(db, "Week2", memo_id);
        await updateDoc(docRef, {completed: true});
        // console.log(getState().memo)
        const _memo_list = getState().memo.list;
        const memo_index = _memo_list.findIndex((b) => {
            return b.id === memo_id;
        })
        // console.log(memo_index)
        dispatch(completedMemo(memo_index));
    }
}

export const deleteMemoFB = (memo_id) => {
    return async function (dispatch, getState) {
        if (!memo_id){
            window.alert("삭제실패");
            return;
        }
        const docRef = doc(db, "Week2", memo_id);
        await deleteDoc(docRef);

        const _memo_list = getState().memo.list;
        const memo_index = _memo_list.findIndex((b) => {
            return b.id === memo_id;
        })

        dispatch(deleteMemo(memo_index));
    }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "memo/LOAD": {
            return {list: action.memo_list}
        }

        case "memo/CREATE": {
            const new_memo = [action.memo, ...state.list];
            return {list: new_memo}
        }

        case "memo/COMPLETED": {
            const completed_memo = state.list.map((l , idx) => {
                if(parseInt(action.memo_index) === idx){
                    return {...l, completed: true}
                }else{
                    return l;
                }
            })
            return {list: completed_memo};
        }

        case "memo/DELETE": {
            const delete_memo_list = state.list.filter((l, idx) => {
                return parseInt(action.memo_index) !==idx;
            })
            return {list: delete_memo_list};
        }

// do reducer stuff
        default: return state;
    }
}

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget () {
//     return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }








// Action Creators
// export function loadWidgets() {
//     return { type: LOAD };
// }
//
//
// export function updateWidget(widget) {
//     return { type: UPDATE, widget };
// }
//
// export function removeWidget(widget) {
//     return { type: REMOVE, widget };
// }
//
// // side effects, only as applicable
// // e.g. thunks, epics, etc
// export function getWidget () {
//     return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }