import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    console.log('constructor---------------------\n');
    super(props);
    this.state = {
      env: 'Develop'
    }
  };


  shouldComponentUpdate(nextProps, nextState, nextContext){
    console.log('ShouldComponentUpdate---------------------\n\n');
  };

  componentDidMount(){
    console.log('\n\n\n\n---------------------');
    console.log('componentDidMount');
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('\n\n\n\n---------------------');
    console.log('ComponentDidUpdate');
    console.log(this.state);
    // console.log(`\nprevProps ${JSON.stringify(prevProps)}`);
    // console.log(`\nprevState ${JSON.stringify(prevState)}`);
    // console.log(`\nsnapshot ${JSON.stringify(snapshot)}`);

  };

  render(){
    return (
      <div className="App">
        Community Dashboard
      </div>
    );
  };
};

export default App;
