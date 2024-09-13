import React, { useState } from "react";
import styled from "styled-components"
import Start from "./components/Start"
import GamePlay from "./components/GamePlay"
function App() {
  
  const[game,modifygame]=useState(false);

  const togglegame = ()=>{
    modifygame((game)=> !game);
  };

  return (
    <div>
     { game ? <GamePlay/> : <Start toggle={togglegame}/>}
    </div>
  )
}

export default App

