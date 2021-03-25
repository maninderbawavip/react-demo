import React from 'react';
import ReactDOM from 'react-dom';
import Name from './components/Name';

const App = function() {
  let age = 20;
  return(<div style={{ display: 'flex'}}>
        <Name name="Maninder" age={age} />
        <Name name="Shraddha"  />
        <Name name="Nandkishor" />
        <Name name="Srikanth"/>
        <Name name="Supriya" />
       </div>)
}

ReactDOM.render(<App />, document.getElementById('app'));

