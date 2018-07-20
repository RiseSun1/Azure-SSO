import React from 'react';
import SelectSearch from 'react-select-search'
import { AgGridReact } from 'ag-grid-react';
import MultipleSelect from 'react-multiple-select-component';
import $ from 'jquery';
 

class MultiSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {values: []};
        console.log('props', props);
    }

    componentDidMount() {
       // $('#customComp').select2();
    }

    handleChange = (event, values) => {
        console.log('The original event', event);
        console.log('An array of selected values', values);
     
        this.setState({values});
      }

    render() {
        let optionvalues = [{name: 'Toyota', value: 'sv'},{name: 'Ford', value: 'Fb'},{name: 'Porsche', value: 'Po'}, {name: 'Suzuki', value: 'su'},{name: 'Dodge', value: 'Do'}];
        return(
            <div id="customComp">
            <div style={{width:"100%"}}>
           {/*  <SelectSearch options={optionvalues} search= {true} value={this.props.data.value} multiple = {true}  name="language" placeholder="Choose your language" /> */}
           <MultipleSelect className="ag-cell-edit-input" style={{width: '100%', height:'25px'}} value={this.state.values}
                        onChange={this.handleChange}>
                       {optionvalues.map((obj) => {
                           console.log('obj', obj);
                       return <option style={{}} value={obj.value}>{obj.name}</option>
                        })}
               </MultipleSelect>
            </div>
            </div>
        )
    }

}

export default MultiSelect;