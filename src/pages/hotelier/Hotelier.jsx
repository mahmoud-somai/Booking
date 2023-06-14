import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Hotelier.css'

import hotelierService from '../../services/hotelier.service'
import { Link } from 'react-router-dom'


const Hotelier = () => {
  const [listRes,setListRes]=useState([]);


  useEffect(()=>{
      init();
  },[]);



  const init=()=>{
      hotelierService.getAllRes().then((res)=>{
          console.log(res);
          setListRes(res.data); 
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
            <span>ID :</span>
            <b>1</b>
            <br></br>
            <br></br>
            <span>Firstname :</span>
            <b>Ahmed</b>
            <br></br>
            <br></br>
            <span>Lastname :</span>
            <b>Ben Ahmed</b>
            <br></br>
            <br></br>
           
            </div>   
    </div>
    <div class="before_table">
    <h1>List Of Reservations </h1>
    <Link to={"/hotelier/reservation"} id="btn_table" className='actions_btn'>Show All The List</Link>
    </div>
    <br></br>
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
        {listRes.map((e,num)=>(
                    <tr key={num}>
                    <th>{num+1}</th>
                    <td>{e.firstname}</td>
                    <td>{e.lastname}</td>
                    <td>{e.email}</td>
                    <td>
                        <Link to={"/admin/editHotelier/"+e.id} className='actions_btn'>Update</Link>
                        <Link to={"/hotelier/reservation"} className='actions_btn'>Show</Link>
                    </td>
                </tr>
        ))}       
    </tbody>
</table>
<br></br>

<div class="before_table">
    <h1>HOTEL </h1>
    <Link to={"/hotelier/edithotel/1"} id="btn_table" className='actions_btn'>Update Hotel Details</Link>
    </div>
    <br></br>
  
<table class="styled-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Description</th>
            <th>Price By Night</th>
        </tr>
    </thead>
    <tbody>
     
                    <tr>
                    <th>Hotel 1</th>
                    <td>address hotel 1</td>
                    <td>Tunis</td>
                    <td>Description Hotel 1</td>
                    <td>180 DT</td>
                </tr>
         
    </tbody>
</table>
    </>
  )
}

export default Hotelier