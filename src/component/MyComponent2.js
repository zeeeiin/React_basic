import React from "react";

// 클래스형 컴포넌트
class MyComponent2 extends React.Component {
 
  render() {
     //자동으로 props라는 이름으로 전달된다. React.Component가 props를 가지고 있다.
     //클래스형 컴포넌트는 멤버변수 props로 자동전달이 된다.
      //console.log( this.props );
      const {name, age} = this.props;

    return (
      <div>
        나의 클래스형 컴포넌트 ㅋㅋㅋ <br/>
        클래스형 props : {name} <br/>
        클래스형 props : {age} <br/>
      </div>
    )
  }
}

export default MyComponent2