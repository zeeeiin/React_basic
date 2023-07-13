import { useState } from "react";



function IterationComponent2 () {

  //1. state 배열 선언 
  const [list, setList] = useState([{id: 1, topic: 'hello'},
                                    {id: 2, topic: 'bye'}
                                    //추가..
                                  ]); //초기값 지정
  //2. input 데이터 state
  const [inputData, setInputData] = useState('');

  
  //3. input데이터 핸들링
  const handleChange = (e) => {
    setInputData(e.target.value); //태그 자신..
  }
  
  //4.클릭이벤트 생성
  const handleClick = () => {
    console.log(inputData);
    
    // const copy = [{id: 3, topic: inputData}]; //배열만들고
    // setList(copy); //이렇게 하면 누적되어 추가가 안 됨
    
    //id는 마지막 아이디보다 하나 큰 숫자
    const obj = [{id: list[list.length -1].id +1, topic: inputData}];
    
    //기존 배열에 합침
    //const newData = list.concat(obj);
    const newData = [...list, ...obj];
    setList(newData);
    setInputData('');//공백으로 초기화    
    
  }

  //5. 삭제이벤트 - 삭제는 id가 필요함
  const handleRemove = (id) => {
      //console.log('실행됨');

      //return에 true가 걸린 요소만 새로운 배열을 만든다.
      //list.filter ( () => true)
      // const result = list.filter( (item, index) => {
      //   console.log(item);
      //   console.log(index);

      //   return item.id !== id;
      // })

      const result = list.filter( item => item.id !== id);
      setList(result);

  }

  const newList = list.map( item => <li key={item.id} onDoubleClick={ () => handleRemove(item.id)}>{item.topic}</li>)
  
  return (
    <div>

      <h3>할 일 목록 만들기</h3>
      <input type="text" onChange={handleChange} value={inputData}/>
      <button type="button" onClick={handleClick}>추가하기</button>

      <ul>
        {newList}
      </ul>

    </div>
  )
}

export default IterationComponent2;