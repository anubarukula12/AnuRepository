import React from 'react';
import logo from './logo.svg';
import './App.css';
import './calc.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Anuradha<code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React for beginners
        </a>
      </header>
    </div>
  );
}*/
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      equation: "",
      disabled: true,
      answer: '',
    }

    this.buttonPressed = this.buttonPressed.bind(this);
    this.backSpaceInput = this.backSpaceInput.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.buttonCalculate = this.buttonCalculate.bind(this);
  }
  buttonPressed= (e)=>{
    var val = this.state.equation + e.currentTarget.value;
   // alert("the value for backspace "+val)
    this.setState({
      display: val,
      equation: val,
   });

    this.setState({ disabled: false });

    var val2 = this.state.display;
    var finalval = val2.match("=")
    if (finalval == "=") {
      this.setState({ display: "" });
      this.setState({ display: e.currentTarget.value });

    }
    else if (e.target.id == "badd" || e.target.id == "bsub" || e.target.id == "bdiv" || e.target.id == "b." || e.target.id == "bmul" || e.target.id == "beq") {
      var appendval = this.state.equation + e.target.value;
      this.setState({ dispaly: appendval });
      this.setState({ disabled: true });
    } else if(this.state.display=="0"){
      // alert("the value of val"+val);
      this.setState({ display: val });
    }else{
    // alert("hai in else backspce");
     val="";
     this.state.equation="";
     this.setState({ display:this.state.display+e.currentTarget.value });
    }

  }
  buttonCalculate = ()=> {

    this.setState({ disabled: true });
    var res = this.state.display;
    var answer = eval(res);
    this.setState({ display: this.state.display + "=" + answer });
    this.state.equation = "";
  }
  backSpaceInput =() =>{
    this.setState({ disabled: false });
    var str = this.state.display;
    //alert("the str value is"+str);
    this.setState({ display: str.substr(0, str.length-1) });
    this.state.display="";
  }
  clearInput =() =>{
    //alert("hai");
    this.setState({ display: "" });
  }


  render() {
  return (<div>      <h1>{this.props.name}</h1>
      <div className="box">
        <div className="display"><input type="text" id="answer" value={this.state.display} readOnly size="16"></input></div>
        <div className="keys">
          <p>
            <input type="button" className="button red" id="clr" value="Clear" onClick={this.clearInput}></input>
            <input type="button" className="button red" id="bcksp" value="Backspace"  onClick={this.backSpaceInput}></input>
          </p>
          <p>
            <input type="button" className="button black" id="b7" value="7" onClick={this.buttonPressed}></input>
            <input type="button" className="button black" id="b8" value="8" onClick={this.buttonPressed}></input>
            <input type="button" className="button black" id="b9" value="9" onClick={this.buttonPressed}></input>
            <input type="button" className="button pink" id="bmul" value="*" onClick={this.buttonPressed} disabled={this.state.disabled}></input>

          </p>


          <p> <input type="button" className="button black" id="b4" value="4" onClick={this.buttonPressed}></input>
            <input type="button" className="button black" id="b5" value="5" onClick={this.buttonPressed}></input>
            <input type="button" className="button black" id="b6" value="6" onClick={this.buttonPressed}></input>
            <input type="button" className="button pink" id="bsub" value="-" onClick={this.buttonPressed} disabled={this.state.disabled}></input>

          </p>


          <p> <input type="button" className="button black" id="b1" value="1" onClick={this.buttonPressed}></input>
            <input type="button" className="button black" id="b2" value="2" onClick={this.buttonPressed}></input>
            <input type="button" className="button black" id="b3" value="3" onClick={this.buttonPressed}></input>
            <input type="button" className="button pink" id="badd" value="+" onClick={this.buttonPressed} disabled={this.state.disabled}></input>

          </p>


          <p> <input type="button" className="button pink" id="b." value="." onClick={this.buttonPressed}></input>
            <input type="button" className="button black" id="bzero" value="0" onClick={this.buttonPressed}></input>
            <input type="button" className="button orange" id="beq" value="=" onClick={this.buttonCalculate} disabled={this.state.disabled}></input>
            <input type="button" className="button pink" id="bdiv" value="/" onClick={this.buttonPressed} disabled={this.state.disabled}></input></p>


        </div>
      </div></div>
);
  }
}
export default Calculator;