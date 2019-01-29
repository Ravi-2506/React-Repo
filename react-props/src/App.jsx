import React, {Component} from 'react';
import App1 from './State ExOne.jsx';
import AppProp from './AppProp.jsx';
import AppComp  from './CompExOne.jsx';
import AppState2 from './StateExTwo.jsx';


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
