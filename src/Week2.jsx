import React from "react";
import {Route} from "react-router-dom";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import {useSelector , useDispatch} from "react-redux";
import {deleteMemo} from "./redux/modules/Memo";

const Week2 = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const box = useSelector((state) => state?.memo.list);
    // const [count, setCount] = React.useState(1)

    //const box = Array.from({length: count}, (v, i) => i);
    //원래 map 돌리던 box

    return (
        <div style={{position: "relative"}}>
            <HeadLine>나의 단어장</HeadLine>
            <hr/>
            <AddCard>
                <button style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    border: "3px solid",
                    backgroundColor: "white",
                }} onClick={() => {
                    history.push("/add")
                }}> +
                </button>
            </AddCard>
            <MainContainer>
                <Container>
                    {box.length ? (
                        <>
                            {box.map((list, index) => {
                                return (
                                    <Card key={index} id={list.id}>
                                        <button style={{
                                            position: "relative",
                                            left: "90%"
                                        }} onClick={() => {
                                            dispatch(deleteMemo(index))
                                        }}>X</button>
                                        <div style={{fontSize: "20px"}}>{list.word}</div>
                                        <div style={{fontSize: "15px"}}>{list.mean}</div>
                                        <div style={{fontSize: "15px", color: "deepskyblue"}}>{list.example}</div>
                                    </Card>
                                )
                            })}
                        </>
                    ) : (
                        <EmptyContainer>
                            <p>등록된 단어가 없습니다.</p>
                        </EmptyContainer>
                    )}
                </Container>
            </MainContainer>
            <button onClick={() => {
                window.scrollTo({top:0, right:0, behavior:"smooth"})
            }} style={{
                width: "30px",
                height: "30px",
                position: "relative",
                float: "right",
                bottom:"0"
            }} >↑</button>
        </div>
    )
}

const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 20px;
  }
`

const HeadLine = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainContainer = styled.div`
  background-color: lightblue;
  margin: auto;
  //height: 100vh;
  max-width: 400px;
  border: 2px solid #ddd;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; // center
  align-items: center; // display ~ align-items 까지 세트
  //height: 100vh;
  min-height: 400px;
`

const AddCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`


const Card = styled.div`
  width: 100%;
  //flex: 1;
  min-height: 150px;
  background-color: white;
  max-width: 350px;
  margin: 20px;
  border: 1px solid #ddd;
`
// flex: 1;을 자식한테 주면 column 일때는 height 가
//  row 일때는 width 가 그 display flex 인 부모의 크기만큼 비율에 맞게 들어감

export default Week2;




