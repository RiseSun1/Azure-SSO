import axios from 'axios';
class DropDownApi{
    
    //Make AJAX call for service with data and return object compatible with SelectWidget component
    static getOptions(){
        return axios.get('./data/options.json').then(response=>{
            console.log('response', response);
            return response.data;
        });
    }
}

export default DropDownApi;