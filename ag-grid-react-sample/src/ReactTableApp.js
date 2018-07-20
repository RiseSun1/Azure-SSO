import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class ReactTableApp extends React.Component{
    constructor(){
        super();

        this.state = {
            data: [
                {
                    name: 'Tanner Linsley',
                    age: 26,
                    friend: {
                        name: 'Jason Maurer',
                        age: 23,
                    }
                },
                {
                    name: 'Tanner Linsley',
                    age: 26,
                    friend:{
                        name: 'Garfunkel',
                        age: 58,
                    }
                },
                {
                    name: 'Simon',
                    age: 57,
                    friend: {
                        name: 'Garfunkel',
                        age: 58,
                    }
                },
                {
                    name: 'Wayne Gretzky',
                    age: 42,
                    friend: {
                        name: 'Patrick Roy',
                        age: 39,
                    }
                },
                {
                    name: 'Captain Hook',
                    age: 40,
                    friend: {
                        name: 'Peter Pan',
                        age: 13,
                    }
                }
            ],
            columns:[
                {
                    Header:'Name',
                    accessor: 'name', //String-based value accessors
                },
                {
                    Header:'Age',
                    accessor:'age',
                    Cell: props =><span className='number'>{props.value}</span>  //Custom cell components
                },
                {
                    id: 'friendName', // Required because our accessor is not a string
                    Header: 'Friend Name',
                    accessor: d => d.friend.name //Custom value accessor
                }
            ]
        };
    }

    render(){
        return (
            <div className="ReactTableApp">
                <h2>React Table</h2>
                <ReactTable 
                    data = {this.state.data} 
                    columns = {this.state.columns}
                    multiSort = {true}
                    /* pivotBy = {['name','friendName']} */
                />
            </div>
        );
    }
}

export default ReactTableApp;