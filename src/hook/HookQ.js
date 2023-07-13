import { useEffect, useRef, useState } from "react";

function HookQ () {

  //input 태그 핸들링
  const [form, setForm] = useState({id:'', pw:''});

  //inputRef 선언
  const idRef = useRef(null);
  const pwRef = useRef(null);
  
  const handleChange = (e) => {
    const copy = {...form, [e.target.name]: e.target.value};
    setForm(copy);
  }


  //useEffect 첫번째 마운트에 포커싱
  useEffect(() =>{
    idRef.current.focus();
  }, [])

  const handleClick = (e) =>{
    if(form.id === '') {
      alert('아이디는 필수 입니다.');
      idRef.current.focus();
      return;
    } else if (form.pw ===''){
      alert('비밀번호는 필수 입니다.');
      pwRef.current.focus();
      return;
    }
    alert(`id: ${form.id}, pw: ${form.pw}`);
  }


  return(

    <div>
        <h3>실습</h3>
        <input type="text" onChange={handleChange} placeholder="아이디" value={form.id} name="id" ref={idRef}/><br/>
        <input type="password" onChange={handleChange} placeholder="비밀번호" value={form.pw}  name="pw" ref={pwRef}/><br/> 
        <button onClick={ handleClick } >로그인</button>{/* e => e.target.value  */}
    </div>

  )


}


export default HookQ;