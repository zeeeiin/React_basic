import { Fragment } from "react";

function App() {

  const name = 'hong';
  const age = 20;

  return (

    <>
      <Fragment>{/* Fragment - 리액트에서 제공해주는 요소. 리액트 제공이라 import로 들어가야한다. */}
      <div className="App">
      
        <ul>
          <li>1. JSX의 주석 alt + shift + a {/* 주석 */}</li>
          <li>2. JSX에서는 반드시 하나의 태그를 ( )소괄호로 묶어서 return 해야 합니다.</li>
          <li>3. div를 사용하기싫다면 Fragment 태그 or 없는 모형 <></> 을 사용할 수 있다.</li>
          <li>4. 함수안에서 만들어진 변수는 중괄호 참조를 사용합니다. {name} 이고 {age} 세 입니다.</li>
          <li>5. JSX에서 if문을 사용하고 싶다면, if문 대신 3항연산자를 이용한다.</li>
          <li>6. 화면에 보여주고싶은게 없는 경우 null을 반환시킵니다.</li>
          <li>7. undefind을 반환하는 상황을 만들면 안 됩니다.</li>
          <li style={{color : 'red', backgroundColor : '#777', fontSize : 15 }}>8. DOM요소에 스타일을 직접 넣을때는 반드시 객체형 객체로 묶고 속성은 카멜 표기법을 사용합니다.</li>
          <li>9. class대신 className을 사용합니다.</li>
          <li>10. HTML5의 문법을 정확하게 지킵니다.(홀로 사용되는 태그는 반드시 닫는 태그를 적습니다.) </li>
        </ul>

        {name === 'hong' ? 'hong 입니다' : 'hong이 아닙니다' }
        {name === 'hong' ?  <p>hong입니다</p> : <p>hong이 아닙니다</p>}
        {age !== 20 ? <p>20세 입니다</p> : null }
        
        <input />
        <img alt="제목" src="#"/>

      </div>
      </Fragment>
    </>
  );
}

export default App;