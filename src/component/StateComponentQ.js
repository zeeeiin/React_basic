import { useState } from "react";

//실습문제
function StateComponentQ () {

  const [num, setNum] = useState(0); //초기값

  const plusNum = () => {
    setNum(num+1); 
  }

  const miusNum = () => {
    setNum(num-1); 
  }
  const resetNum = () => {
    setNum(0);
  }

  return (

    <div>

      <h3>실습</h3>

      <h3>카운트 : {num} </h3>

      <button onClick={ plusNum }>증가</button>
      <button onClick={ miusNum }>감소</button>
      <button onClick={ resetNum }>초기화</button>

    </div>


  )

}

export default StateComponentQ;