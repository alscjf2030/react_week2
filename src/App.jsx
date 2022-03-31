import React from "react";
import {Route} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadMemoFB} from "./redux/modules/Memo";
import {db} from "./firebase";
import {collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc} from "firebase/firestore"

import Week2 from "./Week2";
import AddPage from "./AddPage";

function App() {
    const dispatch = useDispatch()

    React.useEffect(async() => { // async await = 비동기처리하고 기다려주는 한쌍
        dispatch(loadMemoFB());

    }, [])

    return (
        <div>
            <Route path="/" exact>
                <Week2/>
            </Route>
            <Route path="/add" exact>
                <AddPage/>
            </Route>
        </div>
    );
}

export default App;

// addDoc(collection(db, "Week2"), {text: "new", completed: false})
// 파이어스토어 추가하기 예문

// addDoc(collection(db, "Week1"), {text: "new", completed: false})
// 파이어 스토어 새 데이터베이스 추가하기 예문

// const query = await getDocs(collection(db, "Week2"));
// console.log(query);
// query.forEach((doc) => {
//     console.log(doc.id, doc.data());
// }) 파이어스토어 데이터 가져오기 예문

// const docRef = doc(db, "Week2", "qmYwUoZc7YWnLaVYBC4S");
// updateDoc(docRef, {completed: true})
// 파이어스토어 데이터 수정하기 예문

// const docRef = doc(db, "Week2", "dpAq0cngkQoubUs7trdj");
// deleteDoc(docRef);
// 파이어스토어 데이터 삭제하기 예문