import { useReducer } from "react";

//1. 리듀서 함수(state값, 리듀서 실행함수로 전달하는 상태값)
const myReducer = (state, action) => { //현재상태와 액션이라는 값이 전달됨

  console.log(state);
  console.log(action);

  //액션에 따라서 상태를 변경하고 리턴에 state를 반환
  //action 은 객체. 이 안에 들어오는 값 x가 increase였다면

  if(action.x === 'increase'){
    state = {value : state.value +1 };
  } else if(action.x === 'decrease'){
    state = {value : state.value -1 };
  } else if(action.x === 'reset'){
    state = {value : 0 };
  }

  return state;
  
} //hook과 연결해서 사용한다.

function HookReducer () {

  //2. const [현재 state값, 리듀서 실행함수] = 리듀서 훅 (리듀서 함수, state 초기값)
  const [state, func] = useReducer(myReducer, {value: 0});

  const handleClick = () => {
    //리듀서를 실행할 수 있는 func을 대신 실행시킬 것이다.
    //리듀서 함수를 실행 - 매개값은 변화할 값을 넣어준다.
    func({x: 'increase'});
  }


  return (
    <div>
      
      <h3>카운트 : {state.value}</h3>
      <button onClick={handleClick}>증가</button>
      <button onClick={()=> func({x:'decrease'})}>감소</button>
      <button onClick={()=>func({x:'reset'})}>초기화</button>

    </div>
  )

}

export default HookReducer;