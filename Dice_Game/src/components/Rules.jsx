import React from "react";
import styled from "styled-components";

function Rules()
{
    return(
        <Rule>
            <h2>How to play dice game</h2>
            <div className="text">
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                <p>if you get wrong guess then  2 point will be dedcuted </p>
            </div>
        </Rule>
    )
}

const Rule=styled.div`
padding: 20px;
margin: 0 auto;
margin-top: 64px;
max-width: 800px;
background-color: #fbf1f1;
.text{
    margin-top: 24px;
}
`
export default Rules;
