import axios from "axios";

const API_URL = 'http://localhost:3000/user/'

const signup = async (Data) => {
    try{
        const response = await axios.post(`${API_URL}/signup`,Data);
        return response.data;
    }catch(e){
        console.error(e);
    }
}
export const authservices = {signup};

export default authservices;