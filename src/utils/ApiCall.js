import axios from 'axios';
import * as Config from '../constants/config';

export default function apicall(endpoint , method = 'Get' , body) {
    console.log(endpoint);
    
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
        
        
      }).catch(err =>{

        console.log(err);
      });
}