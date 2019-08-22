import React from 'react';
import TextArea from './components/TextArea'
import './App.css';

class App extends React.Component {



  onTextSubmit = ()=> {
    console.log('BAAA')
    }
  
  render (){
    return (
      <div className="App">
        <TextArea onFormSubmit={this.onTextSubmit} />
      </div>
    );
  }    
  
}

export default App;
