/* eslint-disable no-const-assign */

import React, { useEffect, useRef, useState } from "react";


import { List } from "./List";

/*
  Генератор случайных чисел.
  
  Описание:
  Каждый раз, когда нажимаем на "Добавить число", в конец списока добавляется случайное число.

  "Старт" — запускает интервал в 1 сек., который добавляет в конец списка случайное число.

  "Стоп" — останавливает таймер.

  "Показать / Скрыть" - контролирует отображение приложения.

  🔴 Проблемы:

  1. При нажатии "Старт", каждую секунду генерируется и добавляется только 1 число в конец списка. Почему?

  2. "Стоп" не останавливает таймер. Почему?

  3. При нажатии "Показать / Скрыть" список сбрасывается на [1, 2, 3]. Почему?

  ⚠️ Бонусные вопросы (опционально):

  1. После скрытия списка, таймер продолжает работу и будет пытаться сделать ререндер, которого не может уже быть (см. в консоли ошибку). Почему?

  2. Почему ререндерится компонент Button при каждом изменении стейта в List? Можно ли это как-то исправить?

  3. Что ещё можно улучшить в этом приложении?
  
*/

export default function App() {
  const [visibleList, setVisibleList] = React.useState(true);
  const [numbers, setNumbers] = React.useState([1, 2, 3]);
  const [start,setStart] = useState(false)
  const ref = useRef<number>()



  const addRandomNumber = () => {
    const random = Math.round(Math.random() * 10);
    setNumbers(prev => [...prev, random]);
  };


  

  useEffect(() => {
    if(start){
      ref.current = setInterval(addRandomNumber,1000)
    } else{
      clearInterval(ref.current)
    }
    return () => clearInterval(ref.current)
  },[start])

  const toggleVisibleList = () => {
    if(visibleList) {
      setVisibleList(false)
      setStart(false)
      clearInterval(ref.current)
    } else{
      setVisibleList(true)
    }
  };

  return (
    <div className="App">
      <button onClick={toggleVisibleList}>Показать / Скрыть список</button>
      <br />
      <br />
      {visibleList && <List addRandomNumber={addRandomNumber} numbers={numbers} startAndStop={setStart} />}
    </div>
  );
}
