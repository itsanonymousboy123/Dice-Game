import React from "react";
import styled from "styled-components";
import {Button} from "./Button";
function Start({toggle})
{
    return (
       <Container>
       <div>
            <img src="/images/dices 1.png" alt="" />
       </div>
        <div className="content">
            <h1>
                DICE GAME
            </h1>
            <Button onClick={toggle}>
                Play Now
            </Button>
        </div>
       </Container>
    )
    
}

const Container=styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;
    .content{
        h1{
            font-size: 96px;
            margin-block-end:20px
        }
    }
    
`;

export default Start;