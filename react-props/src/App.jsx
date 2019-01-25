import React, {Component} from 'react';
import App1 from './State _Example1.jsx';
import AppProp from './Props_Example1.jsx';
import AppComp  from  './Comp_Example1.jsx';
import AppState2 from './State_Exp2.jsx';


class App extends Component {
  render() {
    return (
        <div>
        <h1>Hello React :)</h1>
          <h2>Hello World</h2>
          <h3>Hello Ravi Pullagurla</h3>
          <h1>Header</h1>
          <h2>Content</h2>
          <p>This is the content!!!</p>
          <App1/>
          <AppProp/>
          <AppComp/>
          <AppState2/>
        </div>
    );
  }
}


export default App;
