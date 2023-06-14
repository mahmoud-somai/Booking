import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import hotelService from '../../services/hotel.service'
import hotelierService from '../../services/hotelier.service'
import './ListHotel.css'

const ListHotel = () => {
    const [listHotel,setListHotel]=useState([]);

    useEffect(()=>{
        init();
    },[]);

    const deleteHotel=(id)=>{
        console.log(id);
        hotelierService.deleteHotelier(id).then((res)=>{
            console.log(res);
        })
    }

    const init=()=>{
        hotelService.getAllHotel().then((res)=>{
            console.log(res);
            setListHotel(res.data); 
            init();
        }).catch((error)=>{
            console.log(error);
        });

    }
  return (
    <div>
    <Navbar/>
    <br/>
    <div className='text-center mt-2'><h1>List Of Hotels</h1></div>
    <br/>
    <Link to={"/admin/addHotel"} className='actions_btn'>Add New Hotel</Link>
    <Link to={"/admin"} className='actions_btn' id='bck'>Back</Link>
    <br/>
    <br/>
    <table class="styled-table">
    <thead>
        <tr>
            <th>Numero</th>
            <th>Name</th>
            <th>City</th>
            <th>Price</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {listHotel.map((e,num)=>(
                    <tr key={num}>
                    <th>{num+1}</th>
                    <td>{e.name}</td>
                    <td>{e.city}</td>
                    <td>{e.price}</td>
                    <td>
                        <Link to={"/admin/editHotel/"+e.id} className='actions_btn'>Update</Link>
                        <button onClick={()=>deleteHotel(e.id)} className='actions_btn'>Delete</button>
                    </td>
                </tr>
        ))}       
    </tbody>
</table>
  </div>
  )
}

export default ListHotel