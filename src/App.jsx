import React, { useState } from "react";
import Rasm from "../public/environment_climate_change_0.jpg";
import Rasm2 from "../public/Hopetoun_falls.jpg";
import Rasm3 from "../public/pexels-singkham-1108572.jpg";
import Rasm4 from "../public/What-Is-Environment-1.jpg";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const App = () => {
  const rasm = [Rasm, Rasm2, Rasm3, Rasm4]
  const [tanlangan, setTanlangan] = useState(Rasm)

  function nextTo(){
    for (let i = 0; i < rasm.length; i++) {
      if (rasm[i]===tanlangan) {
        if (rasm[i+1]) {
          setTanlangan(rasm[i+1])
        }else{
          setTanlangan(rasm[0])
        }
      }
    }
  }

  function backTo(){
    for (let i = 0; i < rasm.length; i++) {
      if (rasm[i]===tanlangan) {
        if (rasm[i-1]) {
          setTanlangan(rasm[i-1])
        }else{
          setTanlangan(rasm[rasm.length-1])
        }
      }
    }
  }
  return (
    <div className="container">
      <div className="asosiy">
        <img src={tanlangan} alt="" />
        <div className="icons">
        <FaArrowAltCircleLeft className="icon" onClick={backTo}/>
        <FaArrowAltCircleRight className="icon" onClick={nextTo}/>
        </div>
      </div>
      <div className="umumiy">
        {rasm.map((item, index)=>(
          <img key={index} src={item} alt="" onClick={()=>setTanlangan(item)}/>
        ))}
      </div>
    </div>
  );
};

export default App;
