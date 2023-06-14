import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddHotelier from "./pages/addHotelier/AddHotelier";
import AddHotel from "./pages/addHotel/addHotel";
import EditHotelier from "./pages/addHotelier/EditHotelier";
import Check from "./pages/checkout/Check";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import Hotelier from "./pages/hotelier/Hotelier";
import List from "./pages/list/List";
import ListHotel from "./pages/listHotel/ListHotel";
import ListH from "./pages/listHotelier/ListH";
import Login from "./pages/login/Login";
import ListRes from "./pages/listRes/listRes";
import EditHotel from "./pages/addHotel/EditHotel";
import Admin from "./pages/admin/Admin";
// <button  id="navbut" className="actions_btn">Logout</button>

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path='/hotelier' element={<Hotelier/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/checkout' element={<Check/>}/>
        <Route path='/admin/addHotelier' element={<AddHotelier/>}/>
        <Route path='/admin/addHotel' element={<AddHotel/>}/>
        <Route path="admin/hotelier" element={<ListH/>}/>
        <Route path='/admin/editHotelier/:id' element={<EditHotelier/>}/>
        <Route path='/admin/hotels' element={<ListHotel/>}/>
        <Route path='/hotelier/reservation' element={<ListRes/>}/>
        <Route path='/admin/editHotel/:id' element={<EditHotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
