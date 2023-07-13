import { useRef, useState } from "react";

function HookRef() {

  //state 2개 선언
  const [form, setForm] = useState({data:'', result: ''}); //객체 초기값 각각 인풋과 결과값 제어

  //useRef
  const inputRef = useRef(null);

  //객체형이다보니 이벤트 객체
  const handleChange = (e) => {
    const copy = {...form, 'data': e.target.value };
    console.log(copy);
    setForm(copy);
  }

  //ref의 current속성에 태그를 넣어준다.
  const handleClick = () => {
    console.log(inputRef.current); //태그
    console.log(inputRef.current.value); //태그의 value 값
    //버튼을 클릭하면 input태그에 접근할 수 있게 된다.

    setForm({data: '', result: inputRef.current.value});

    inputRef.current.focus(); //인풋태그에 포커스
  }


  return(
    <div>
      <h3>useRef(특정태그 이름달기)</h3>

      <input type="text" onChange={handleChange} value={form.data} ref={inputRef}/>
      <button onClick={handleClick}>확인하기</button>

      {form.result}

    </div>
  )
}

export default HookRef;