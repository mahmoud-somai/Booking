import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import hotelService from '../../services/hotel.service'
import hotelierService from '../../services/hotelier.service'
import './listRes.css'

const ListRes = () => {
    const [listReservation,setListReservation]=useState([]);

    useEffect(()=>{
        init();
    },[]);

    const deleteRes=(id)=>{
        console.log(id);
        hotelierService.deleteRes(id).then((res)=>{
            console.log(res);
        })
    }

    const init=()=>{
        hotelierService.getAllRes().then((res)=>{
            console.log(res);
            setListReservation(res.data); 
            init();
        }).catch((error)=>{
            console.log(error);
        });

    }
  return (
    <div>
    <Navbar/>
    <br/>
    <div className='text-center mt-2'>
        <h1>List Of Reservations</h1>
        <Link to={"/admin"} className='actions_btn' id='bck'>Back</Link>
        </div>

    
    <br/>
    <br/>
    <table class="styled-table">
    <thead>
        <tr>
            <th>Numero</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Reservation Start from</th>
            <th>To</th>
            <th>Ammount</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {listReservation.map((e,num)=>(
                    <tr key={num}>
                    <th>{num+1}</th>
                    <td>{e.firstname}</td>
                    <td>{e.lastname}</td>
                    <td>{e.email}</td>
                    <td>{e.phone}</td>
                    <td>{e.resstart}</td>
                    <td>{e.resend}</td>
                    <td>{e.ammount} DT</td>
                    <td>
                        <Link to={"/admin/editHotelier/"+e.id} className='actions_btn'>Approve</Link>
                        <button onClick={()=>deleteRes(e.id)} className='actions_btn'>Delete</button>
                    </td>
                </tr>
        ))}       
    </tbody>
</table>
  </div>
  )
}

export default ListRes