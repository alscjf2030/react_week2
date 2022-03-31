import React, {useRef} from "react";
import {Route} from "react-router-dom";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {createMemo , addMemoFB} from "./redux/modules/Memo"


const AddPage = (props) => {
    const word = React.useRef(null);
    const mean = React.useRef(null);
    const example= React.useRef(null);

    const history = useHistory()
    // const wrap = React.useRef(1)
    const dispatch = useDispatch();

    const [count, setCount] = React.useState(1)
    // const box = Array.from({length: count}, (v, i) => i)

    const addMemo = () => {
        // dispatch(createMemo({
        //     word: word.current.value,
        //     mean: mean.current.value,
        //     example: example.current.value,
        // }));
        dispatch(addMemoFB({
            word: word.current.value,
            mean: mean.current.value,
            example: example.current.value,
        }))
        setCount(count + 1)
        history.push("/")
    }

    return (
        <NameBox1>
            <h3 style={{textAlign: "center"}}>단어 추가하기</h3>
            <NameBox2>
                <Mini>
                    <p>단어</p>
                    <MiniBox type="text" placeholder="단어를 입력하세요" ref={word}/>
                </Mini>
                <Mini>
                    <p>뜻</p>
                    <MiniBox type="text" placeholder="뜻을 입력하세요" ref={mean}/>
                </Mini>
                <Mini>
                    <p>예문</p>
                    <MiniBox type="text" placeholder="예문 입력하세요" ref={example}/>
                </Mini>
            </NameBox2>
            <Route path="/">
                <button onClick={addMemo}
                        style={{
                    width: "96%" ,
                    backgroundColor: "white",
                    padding: "5px" ,
                    margin: "0 6px",
                }}>추가하기</button>
            </Route>
        </NameBox1>
    )
}

export default AddPage;

const NameBox1 = styled.div`
  background-color: slateblue;
  border: aliceblue 2px solid ;
  border-radius: 10px;
  width: 300px;
  height: 450px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%,-50%);
`;

const NameBox2 = styled.div`
  padding: 5px 1px;
`;

const Mini = styled.div`
  background-color: white;
  margin: 5px;
  border: 1px solid #ddd;
`

const MiniBox = styled.input`
  box-sizing: border-box;
  width: 100%;
  margin: 0 0 15px 0;
`
// 100%로만 하면 div 박스 밖으로 빠져나감
// 그래서 box-sizing 을 border-box 로 설정해 줘야함





// const removeMemo = () => {
//     if(count > 0){
//         setCount(count -1);
//     }else{
//         window.alert("메모가 없습니다.");
//     }
// }