// Memo.js

// Actions
const CREATE = 'memo/CREATE';
const DELETE = 'memo/DELETE';

// 초기값
const initialState = {
    list: []
}

// Action Creators
export function createMemo(memo) {
    return { type: CREATE, memo: memo};
}

export function deleteMemo(memo_index){
    return {type: DELETE, memo_index: memo_index};
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "memo/CREATE": {
            const new_memo = [...state.list, action.memo];
            return {list: new_memo}
        }

        case "memo/DELETE": {
            const new_memo_list = state.list.filter((l, idx) => {
                return parseInt(action.memo_index) !==idx;
            })
            return {list: new_memo_list};
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