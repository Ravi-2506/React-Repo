import React, { Component } from 'react';
import './App.css';
import HeaderTop from './HeaderTop.js'
import HeaderPageone from './HeaderPageone.js'
import ParaOne from'./ParaOne.js'
import ParaTwo from './ParaTwo.js'
import HeaderPagetwo from './HeaderPagetwo.js'
import MainContent from './MainContent.js'
import ParaThree from './ParaThree.js'
import ParaFour from './ParaFour'
import Footer from './Footer.js'

class App extends Component {
  render() {
    return (
        <div>
        <HeaderTop  headertopprop="This is Header Top " />
        <HeaderPageone  headerpageone="This is Header Page 1"/>
        <ParaOne paaraoneprop="This is paragraph One" />
        <ParaTwo paratwoprop="This is paragraph two" />
        <HeaderPagetwo headerpagetwo="This is Header Page 2" />
        <MainContent maincontentprop="THIS IS RAVI P " />
        <ParaThree parathreeprop="This is Paragraph Three" />
        <ParaFour parafourprop="This is Paragraph Four" />
        <Footer footerprop="This is Footer" />

      </div>
    );
  }
}

export default App;
