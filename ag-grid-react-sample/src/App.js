import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import AgGridApp from './AgGridApp';
import ReactTableApp from './ReactTableApp';
import SelectWidget from './SelectWidget';
import DropDownApi from './DropDownApi';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AgGridApp />
        <ReactTableApp />
        <div style={{width:"20%"}} >
          <SelectWidget getOptions={()=>{
            return DropDownApi.getOptions();
          }} title={'This is a sample title from the component property'} url={'./data/options.json'} />
        </div>
      </div>
    );
  }
}

export default App;
