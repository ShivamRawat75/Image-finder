
import axios from 'axios';

const API_URL='https://pixabay.com/api/'
const API_KEY='34192462-599a04be9dace981a799c37ff'


export const getImages= async(text,count)=>{
    try {
      return await axios.get(`${API_URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safe_search=true`);
    } catch (error) {
        console.log('Error while calling API',error.message);
        
    }
}