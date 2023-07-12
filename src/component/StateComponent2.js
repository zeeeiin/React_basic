import React from "react";

//클래스형에서 props와 state
class StateComponent2 extends React.Component { //반드시 상속받아야함

  //클래스형 컴포넌트가 생성될 때 생성자로 props 전달
  constructor(props) {
    super(props);
    //state생성
    this.state = {
      name : '홍길동',
      age : props.age
    }
  }

  handleState = () => {   
    //비동기적으로 state 변경
    this.setState ({name: '이순신', age : 30});
  }

  render() { //render 함수 오버라이딩

    //const {age} = this.props;
    return (
      <div>
        <div>클래스형 컴포넌트</div>
        state 값: {this.state.name} <br/>
        state 값: {this.state.age}

        <button onClick={this.handleState}>state 체인지</button>
      </div>


    )  
  }
}




export default StateComponent2;