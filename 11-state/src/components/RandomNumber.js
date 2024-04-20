import { useState } from "react";
import generateRandonNum from "../utils/generateRandonNum";

function RandomNumber({ maxNumber }) {
  const [randomNum, setRandomNum] = useState(generateRandonNum(maxNumber));
  const changeRamdomNum = () => {
    setRandomNum(generateRandonNum(maxNumber));
  };
  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRamdomNum}>Generate new random number</button>
    </div>
  );
}

export default RandomNumber;
