import React, { useState } from "react";
import styled from "styled-components";
function Selector({err,seterr,selectednum,setselected}){
    const num=[1,2,3,4,5,6];
    
    function fn(number)
    {
        setselected(number);
        seterr("");
    }
    return(
        <Maincontainer>
        <p className="para">{err}</p>
        <div className="flex">
       {num.map((number, i) => (
            <Box
            onClick={()=>fn(number)} 
            key={i}
            isselected={
            number===selectednum}
            >{number}</Box>
        ))}
        </div>
        <p> Select Number</p>
        </Maincontainer>
    )
}

const Maincontainer=styled.div`
margin-top:20px;
margin-right: 80px;
display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 700px;
    
}
.para{
        color: red;
    }
`
const Box=styled.div`
    height: 72px;
    width: 72px;
    font-size: 30px;
    font-weight: 700;
    display: grid;
    place-content: center;
    border: 1px solid black;
    background-color: ${(props)=>(props.isselected ? "black": "white")};
    color: ${(props)=>(!props.isselected ? "black": "white")};

`
export default Selector;