import { useState } from "react";

function StateComponent() {

  //state - 컴포넌트 안에서 변화하는 값(즉 상태변수)
  // const result = useState('초기값')
  // console.log(result);
  // const a = result[0]; //현재값
  // const b = result[1]; //함수


  const [data, setData] = useState('초기값')
  const [num, setNum] = useState(0);

  //state하나 더 만들기
  const [color, setColor] = useState('black');


  //State는 절대 직접 값을 바꾸면 안 된다.
  //data = '이거바꿔야지';

  //setData 두번째 매개변수는 함수. 이름 앞에 set을 넣는다.
  //state는 이벤트 or 특정 함수 안에서 바꾸도록 처리한다.
  // setData('변경해야지'); //무한루프
  // console.log(1);

  const handleData = () => {
    setData('change!'); //비동기적으로 state값을 변경 -> 
    setNum(10);
  }

  //빨간색 변경
  //const handleColor = () => setColor('red');


  return(
    <div>
      State 값 : {data}       
      <br/>
      State 값 : {num}
      <br/>
      <button onClick={handleData}>State 값 변경</button>


      <br/>
      <h3 style={{color : color}}>{data}</h3>

      <button onClick={ () => setColor('red') }>붉은색</button>

      {/* <button onClick={ () => {
        setColor('red') 
      }>붉은색</button> */}

      <button onClick={ () => setColor('blue') }>푸른색</button>
      <button onClick={ () => setColor('yellow') }>노란색</button>

    </div>
    
  )
}

export default StateComponent;