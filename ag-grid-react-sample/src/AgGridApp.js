import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';
import MultiSelect from './multiSelect';


class AgGridApp extends React.Component{
    constructor(){
        super();
        let optionvalues = ['Toyota','Ford','Porsche', 'Suzuki', 'Dodge'];
        this.state = {
            columnDefs: [
            {headerName: "Make", field: "make", editable:"true", cellRenderer:'MultiSelect'},
            {headerName: "Model", field: "model"},
            {headerName: "Price", field: "price"}
            ],
            rowData: [
                {make: "Toyota", model: "Celica", price: 35000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Porsche", model: "Boxter", price: 72000}
            ],
            frameworkComponents: {
                MultiSelect: MultiSelect
            },
            context: { componentParent: this }
        };

    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        params.api.sizeColumnsToFit();
      }

    render(){
       return ( 
            <div className="AgGridApp">
                Ag Grid resides here
                <div style={{ height: '150px', width: '100%', lineHeight:'20px'}} className="ag-theme-balham">
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        //context={this.state.context}
                        //onGridReady={this.onGridReady.bind(this)}
                        frameworkComponents = {this.state.frameworkComponents}/>
                </div>
            </div>
        );
    };

}

export default AgGridApp