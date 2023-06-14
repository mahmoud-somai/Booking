import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import hotelierService from '../../services/hotelier.service'
import './ListH.css'

const ListH = () => {
    const [listHotelier,setListHotelier]=useState([]);

    useEffect(()=>{
        init();
    },[]);

    const deleteHotelier=(id)=>{
        console.log(id);
        hotelierService.deleteHotelier(id).then((res)=>{
            console.log(res);
        })
    }

    const init=()=>{
        hotelierService.getAllHoteliers().then((res)=>{
            console.log(res);
            setListHotelier(res.data); 
            init();
        }).catch((error)=>{
            console.log(error);
        });

    }
  return (
    <div>
    <Navbar/>
    <br/>
    <div className='text-center mt-2'><h1>List Of Hotelier</h1></div>
    <br/>
    <Link to={"/admin/addHotelier"} className='actions_btn'>Add New Hotelier</Link>
    <Link to={"/admin"} className='actions_btn' id='bck'>Back</Link>
    <br/>
    <br/>
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
                        <button onClick={()=>deleteHotelier(e.id)} className='actions_btn'>Delete</button>
                    </td>
                </tr>
        ))}       
    </tbody>
</table>
  </div>
  )
}

export default ListH