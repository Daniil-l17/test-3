/* eslint-disable no-const-assign */
import React, { Dispatch, SetStateAction } from "react";

import { Buttons } from "./Buttons";

export function List({numbers,startAndStop,addRandomNumber}:{numbers:number[],startAndStop:Dispatch<SetStateAction<boolean>>,addRandomNumber: () => void}) {


  return (
    <div className="list">
      <Buttons
      addRandomNumber={addRandomNumber}
        startAndStop={startAndStop}
      />
      <ul>
        {numbers.map((num) => (
          <li>{num}</li>
        ))}
      </ul>
    </div>
  );
}
