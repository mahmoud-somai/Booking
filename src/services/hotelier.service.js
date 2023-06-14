import axios from "axios";

const url='http://localhost:8080';

class HotelierService{
    saveHotelier(Hotelier){
        return axios.post(url+"/hotelier",Hotelier)
    }

    getAllHoteliers(){
        return axios.get(url+"/hoteliers");
    }
    getHotelierById(id){
        return axios.get(url+"/hotelier/"+id);
    }
    updateHotelier(id,hotelier){
        return axios.put(url+"/hotelier/"+id,hotelier);
    }
    deleteHotelier(id){
        return axios.delete(url+"/hotelier/"+id);
    }
    getAllRes(){
        return axios.get(url+"/reservations")
    }
    deleteRes(id){
        return axios.delete(url+"/res/"+id);
    }
    updateRes(id,res){
        return axios.put(url+"/res/"+id,res);
    }
}

export default new HotelierService();