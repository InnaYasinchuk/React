import React from 'react';

import './App.css';

type FooterProps = {
  copyright : string;
}

const user = {
  userName : 'Inna',
  userSurname : 'Yasinchuk',
  city : 'Kyiv',
 }

const Footer: React.FC<FooterProps> = (props) => (
  <footer>Footer {props.copyright}</footer>
)

const App = () =>(

    <div className="App">
      <h1>Hello {user.userName} {user.userSurname}</h1>
      <p>You live in {user.city}</p>
      <Footer copyright ='C' />
    </div>
  
)

export default App;
