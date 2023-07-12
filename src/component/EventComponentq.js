import { useState } from "react";


// eslint-disable-next-line
function EventComponentq() { 

  const [data, setData] = useState('메뉴를 선택하세요');

  const change = (e) => { 
    setData(e.target.value);// eslint-disable-next-line 
  }

  return (


    <div>

      <h3>셀렉트 태그 핸들링(실습)</h3>

      <pre>셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력</pre>

      <select onChange={ change } >
        <option >피자</option>
        <option >햄버거</option>
        <option >치킨</option>
      </select>

      <h3>선택한 결과</h3>

      <p>{data}</p>
      
    </div>


  )

}

export default EventComponentq;