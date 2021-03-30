import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Content } from './components/Content.js';
import Header from './components/Header.js'

const App = function() {

  return(<div>
          <Header />
          <Content />
       </div>)
}

//what is a component -> its a function renders a html/jsx/ some conetnt

ReactDOM.render(<App />, document.getElementById('app'));

