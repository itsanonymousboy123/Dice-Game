import React, { useState } from "react";
import styled from "styled-components";

function RoleDice({currentdice,generate})
{
    return(
        <Container>
         <div className="dice" onClick={generate}>
            <img src={`/images/dice_${currentdice}.png`} alt="Dice1" />
         </div>
         <p>Click on Dice to roll</p>
        </Container>
       
    );
}

const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    p{
        font-size: 24px;
        font-weight: 500;
    }
    .dice{
        cursor: pointer;
    }

`
export default RoleDice;