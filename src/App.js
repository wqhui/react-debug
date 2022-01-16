import './App.css';
import * as React from 'react';

function App() {
  const [count, setCount] = React.useState(1)
  const increament = () => {
    setCount(count+1)
  }
  return (
    <div className="App">
        <Header count={count} increament={increament}/>
    </div>
  );
}

class Header extends React.Component{
  componentDidUpdate(){
  }
  setRef = (dom) => this.ele = dom
  render(){
    return <header className="App-header" ref={this.setRef}>
    <p>Learn React {this.props.count} days</p>
    <button onClick={this.props.increament}>increment</button>
  </header>
  }
}

export default App;
