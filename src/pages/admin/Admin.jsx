import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Admin.css'
import hotelierService from '../../services/hotelier.service'
import hotelrService from '../../services/hotel.service'
import { Link } from 'react-router-dom'

const Admin = () => {
  const [listHotelier,setListHotelier]=useState([]);
  const [listHot,setListHot]=useState([]);

  useEffect(()=>{
      init();
      trait();
  },[]);


  const init=()=>{
      hotelierService.getAllHoteliers().then((res)=>{
          console.log(res);
          setListHotelier(res.data); 
          init();
      }).catch((error)=>{
          console.log(error);
      });
  }

  const trait=()=>{
    hotelrService.getAllHotel().then((res)=>{
        console.log(res);
        setListHot(res.data); 
        init();
    }).catch((error)=>{
        console.log(error);
    });
}
  return (
    <>
    <Navbar/>
    <div className="profile_container">
        <div className="image_box">
            <img src="https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg" alt="" className='profil' />
        </div>
        <div className="data_box">
           
            <br></br>
            <br></br>
            <span>Firstname :</span>
            <b>Admin</b>
            <br></br>
            <br></br>
            <span>Lastname :</span>
            <b>Admin</b>
            <br></br>
            <br></br>
           
            </div>   
    </div>
    <div class="before_table">
    <h1>List Of Hotels </h1>
    <Link to={"/admin/hotels"} id="btn_table" className='actions_btn'>Show Hotels</Link>
    </div>
    <br></br>
  
<table class="styled-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Price By Night</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
    {listHot.map((e,num)=>(
                    <tr key={num}>
                    <th>{num+1}</th>
                    <td>{e.name}</td>
                    <td>{e.city}</td>
                    <td>{e.price}</td>
                    <td>
                        <Link to={"/admin/editHotelier/"+e.id} className='actions_btn'>Update</Link>
                        
                    </td>
                </tr>
        ))}               
    </tbody>
</table>
<br></br>
    <div class="before_table">
    <h1>List Of Hoteliers </h1>
    <Link to={"/admin/hotelier"} id="btn_table" className='actions_btn'>Show All The List</Link>
    
    </div>
    <br></br>
  
    <table class="styled-table">
    <thead>
        <tr>
            <th>Numero</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {listHotelier.map((e,num)=>(
                    <tr key={num}>
                    <th>{num+1}</th>
                    <td>{e.firstname}</td>
                    <td>{e.lastname}</td>
                    <td>{e.email}</td>
                    <td>
                        <Link to={"/admin/editHotelier/"+e.id} className='actions_btn'>Update</Link>
                        
                    </td>
                </tr>
        ))}       
    </tbody>
</table>
<br></br>


    </>
  )
}

export default Admin