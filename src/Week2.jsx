import React from "react";
import {Route} from "react-router-dom";
import {useHistory} from "react-router-dom";
import Styled from "styled-components"


const Week2 = (props) => {
    const history = useHistory()

    const [count , setCount] =React.useState(3)
    console.log(count)
    const box = Array.from({length: count}, (v, i) => i);


    return (
        <div>
            <h1 className="Head_Line">나만의 명함 List</h1>
            <hr/>
            <div className="Main">
                {box.map((n, i) => {
                    return(
                        <div key={i} className="App" >
                            <p>이름</p>
                            <p>연락처</p>
                            <p>주소</p>
                        </div>
                    )
                })}
            </div>
            <button onClick={()=>{
                history.push("/add")
            }}>명함만들기</button>
        </div>
    )
}

export default Week2;


