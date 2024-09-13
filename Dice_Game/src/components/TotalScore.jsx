import React from "react";
import styled from "styled-components";
function Score({score})
{
    return(
        <ScoreContainer>
         <h1>{score}</h1>
         <p>Total Score</p>
        </ScoreContainer>
    )
}

const ScoreContainer= styled.div`
    width: 200px;
    text-align: center;
    h1{
        font-size: 100px;
        line-height: 3px;
    }
    p{
        font-size:24px;
        font-weight: 500px;
    }

`
export default Score;