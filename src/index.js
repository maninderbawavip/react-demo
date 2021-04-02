import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Content } from './components/Content.js';
import Header from './components/Header.js'
import { PostsProvider } from './context/PostsStorage.js';
import { UserProvider } from './context/UserContext.js';
import './index.css'

const App = function() {

  const [myName, changeMyName] = useState(
    { userName: "Maninder", fullName: "Maninder Bawa"}
  )

  return(<div>
        <UserProvider value={{ 
          myName, 
          changeMyName
        }}>
          <Header />
          <PostsProvider value={[
            {postTitle: "Hello"}, 
            {postTitle: "Yellow"}
            ]}>
             <Content />
          </PostsProvider>
        </UserProvider>
       </div>)
}

//what is a component -> its a function renders a html/jsx/ some conetnt

ReactDOM.render(<App />, document.getElementById('app'));

