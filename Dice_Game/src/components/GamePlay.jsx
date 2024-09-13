import React,{useState} from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { Button, Outline } from "./Button";
import Rules from "./Rules";

function Play()
{
    const[currentdice,setdice]=useState(1);
    const [selectednum,setselected]=useState();
    const[total,settotal]=useState(0);
    const [err,seterr]=useState("");
    const [showrules,setrules]=useState(false);
    const randomgen=(min,max)=>{
        return Math.floor(Math.random()*(max-min)+min);
    }
    const generate=()=>{
        if(!selectednum){
            seterr("You have not selected any number");
        }
        const num=randomgen(1,7);
        setdice(num);
        if(selectednum===num){
            settotal((prev)=>prev+num);
        }
        else{
            settotal((prev)=>prev-2);
        }
        setselected(undefined);
    }
    const resetScore=()=>{
        settotal(0);
    }

    return (
        
        <Main>
            <div className="top_cont">
            <TotalScore score={total}/>
            <NumberSelector err={err} seterr={seterr} selectednum={selectednum} setselected={setselected} />
            </div>
            <RoleDice currentdice={currentdice} generate={generate} />
            <div className="btns">
                <Outline onClick={resetScore}>Reset Score</Outline>
                <Button onClick={()=>setrules((prev)=>!prev)}>{showrules ? "Hide Rules" : "Show Rules"}</Button>
            </div>
            {showrules && <Rules />}

        </Main>
    )
        
    
}
const Main=styled.div`
.top_cont{
    display: flex;
    justify-content: space-between;
}
.btns{
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 14px;
    gap: 10px;
}
`
export default Play;