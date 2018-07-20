import ReactSelect from 'react-select'; 
import 'react-select/dist/react-select.css';
import React from 'react';
import MDSpinner from "react-md-spinner";



class SelectWidget extends React.Component{
    constructor(){
        super();
        this.state = {
            options: [],
            isLoaderVisible: false,
            isDropdownVisible:false
        };
    }

    // Method called to show loader
    showLoader(){
        this.setState({isLoaderVisible:true});
    }

    // Method called to hide loader
    hideLoader(){
        this.setState({isLoaderVisible:false});
    }

    // Method called to show dropdown
    showDropdown(){
        this.setState({isDropdownVisible:true});
    }

    // Method called to hide dropdown
    hideDropDown(){
        this.setState({isDropdownVisible:false});
    }

    // To be called when data fetching starts
    fetchDataStart(){
        this.hideDropDown();
        this.showLoader();
    }

    // To be called when data fetching stops/ completes 
    fetchDataStop(){
        this.hideLoader();
        this.showDropdown();
    }

    // To be called to fetch the dropdown data
    fetchOptions(){
        if(this.props.getOptions){
            this.fetchDataStart();
            this.props.getOptions().then(optionslist=>{
                this.setState({options:optionslist});
                this.fetchDataStop();
            });
        }
    }
    

    componentDidMount(){
        this.fetchOptions();
    }

    render(){

        return (
           
            <div style={{width:"100%"}}>
                <div className="dropdown">
                <h4>{this.props.title}</h4>
                    <div style={{display:this.state.isDropdownVisible?"block":"none"}}>
                        <ReactSelect 
                        name="sample-react-select" 
                        value={this.props.value} 
                        onChange={(selected)=>{
                            this.setState({selectedvalstatic:selected});
                        }} 
                        options={this.state.options}
                    />
                    </div> 
                </div>
                <div className="loader" style={{display:this.state.isLoaderVisible?'block':'none'}}>
                    <MDSpinner />
                </div>
            </div>
           
        );
    }
}

export default SelectWidget;