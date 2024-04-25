import React, { Dispatch, SetStateAction } from "react";

export const Buttons = React.memo(({ startAndStop,addRandomNumber }:{startAndStop:Dispatch<SetStateAction<boolean>>,addRandomNumber:() => void}) => {
  return (
    <div className="buttons">
      <button onClick={addRandomNumber}>Новое число</button>
      <br />
      <button onClick={() => startAndStop(true)}>
        Старт
      </button>
      <button onClick={() => startAndStop(false)}>Стоп</button>
    </div>
  );
});
