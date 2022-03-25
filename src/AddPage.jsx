import React from "react";
import {Route} from "react-router-dom";
import {styled} from "styled-components"

const AddPage = (props) => {

    const [count , setCount] =React.useState(3)

    const addMemo = () => {
        setCount(count + 1)
    }

    return (
        <NameBox1>
            <div className="NameBox2">
                <p>이름</p>
                <input type="text"/>
            </div>
            <div>
                <p>연락처</p>
                <input type="text"/>
            </div>
            <div>
                <p>주소</p>
                <input type="text"/>
            </div>
            <button>추가하기</button>
        </NameBox1>
    )
}

export default AddPage;

const NameBox1 = styled.div`
    background-color: gray;
    width: 250px;
    height: 350px;
    margin: auto;
`;

const NameBox2 = styled.div`
    
`;



// const removeMemo = () => {
//     if(count > 0){
//         setCount(count -1);
//     }else{
//         window.alert("메모가 없습니다.");
//     }
// }