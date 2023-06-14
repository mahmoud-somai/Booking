import axios from "axios";

const url='http://localhost:8080';

class HotelService{
    saveHotel(Hotel){
        return axios.post(url+"/hotel",Hotel)
    }
    getAllHotel(){
        return axios.get(url+"/hotels");
    }
    getHotelById(id){
        return axios.get(url+"/hotel/"+id);
    }
    updateHotel(id,hotel){
        return axios.put(url+"/hotel/"+id,hotel);
    }
    deleteHotel(id){
        return axios.delete(url+"/hotel/"+id);
    }
    saveDay(day){
        return axios.post(url+"/days",day)
    }
    getDay(){
        return axios.get(url+"/days");
    }

}

export default new HotelService();