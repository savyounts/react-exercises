import React from 'react';


class Calculator extends React.Component {
  state = {
    value: 0,
    num1: 0,
    num2: 0,
    method: ''
  };

  numberClick = e =>{
    e.persist()
    console.log(e.target.innerText)
    if (this.state.num1 === 0 && this.state.method === "") {
      this.setState({
        num1: e.target.innerText
      })
    } else if (this.state.method === "") {
      this.setState(prevState => ({
      num1: prevState.num1 + e.target.innerText
    }))
    }
    else{
      this.setState(prevState => ({
      num2: prevState.num2 + e.target.innerText
    }))
    }
    console.log(this.state)
  }

  methodClick = e =>{
    this.setState({
      method: e.target.innerText
    })
    console.log(this.state)

  }

  clearClick = e => {
    this.setState({
      value: 0,
      num1: 0,
      num2: 0,
      method: ''
    })
  }

  equalClick = e => {
    let value
    if (this.state.method === "+") {
      value = parseInt(this.state.num1) + parseInt(this.state.num2)
    }else if (this.state.method === "-"){
      value = parseInt(this.state.num1) - parseInt(this.state.num2)
    }else{
      value = parseInt(this.state.num1) / parseInt(this.state.num2)
    }
    this.setState({
      value: value,
      num1: 0,
      num2: 0,
      method: ''
    })
    console.log(this.state)

  }

  render(){
    return(
      <div style={divStyles}>
        <p style={inputStyles}>{this.state.value || this.state.num2 || this.state.num1}</p>

        <div style={clearStyles} onClick={this.clearClick}>clear</div>
        <div style={methodStyles} onClick={this.methodClick}>/</div>

        <div style={numStyles} onClick={this.numberClick}>7</div>
        <div style={numStyles} onClick={this.numberClick}>8</div>
        <div style={numStyles} onClick={this.numberClick}>9</div>
        <div style={methodStyles} onClick={this.methodClick}>-</div>

        <div style={numStyles} onClick={this.numberClick}>4</div>
        <div style={numStyles} onClick={this.numberClick}>5</div>
        <div style={numStyles} onClick={this.numberClick}>6</div>
        <div style={methodStyles} onClick={this.methodClick}>+</div>

        <div style={numStyles} onClick={this.numberClick}>1</div>
        <div style={numStyles} onClick={this.numberClick}>2</div>
        <div style={numStyles} onClick={this.numberClick}>3</div>
        <div style={methodStyles} onClick={this.equalClick}>=</div>
      </div>
    )
  }
};

export default Calculator;

const divStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repleat(5, 1fr)',
  border: '1px solid black',
  margin: '2em',
  width: '300px',
  placeItems: 'center center',
}

const inputStyles={
  gridColumn: '1/-1',
  justifySelf: 'right',
  padding: '5px'

}

const clearStyles= {
  gridColumn: '1/span 3'
}

const numStyles ={
  fontSize: '2em',
  border: '1px solid black',
  width: '100%',
  textAlign: 'center'
}

const methodStyles ={
  fontSize: '2em',
  border: '1px solid black',
  width: '100%',
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'red'
}
