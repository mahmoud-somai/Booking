import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import back from  '../../assets/my-account.jpg'
import { useState } from 'react'
import hotelService from '../../services/hotel.service'
import './addHotel.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const EditHotel = () => {
    const [Hotel,setHotel]=useState({
        name:"",
        city:"",
        address:"",
        description:"",
        price:""
    });

    const data=useParams();

    useEffect(()=>{
        hotelService.getHotelById(data.id).then((res)=>{
            setHotel(res.data);
        }).catch((error)=>{
            console.log(error);
        });
    },[])

    const onInputChange=(e)=>{
        const value=e.target.value;
        setHotel({...Hotel,[e.target.name]:value});
    }

    const navigate=useNavigate();
    const onSubmit=(e)=>{
        e.preventDefault();
        hotelService.updateHotel(Hotel.id,Hotel).then((res)=>{
            console.log(res);
            console.log("success");
            navigate("/admin/hotels");
        })
    };
  return (
    <>
    <Navbar/>
    <div id="booking" class="section">
		<div class="section-center">
			<div class="container">
				<div class="row">
                    
					<div class="booking-form">
                    <div className="backImg">
                        <img src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/04/12/1329/MUMGH-P0765-Inner-Courtyard-Hotel-Exterior-Evening.jpg/MUMGH-P0765-Inner-Courtyard-Hotel-Exterior-Evening.16x9.jpg" alt="" />
                            <div className="text">
                            <h1>EDIT HOTEL</h1>
                            </div>
                    </div>
						<form onSubmit={(e)=>onSubmit(e)}>
							<div class="row">
								<div class="col-sm-6">
									<div class="form-group">
										<span class="form-label">Name</span>
										<input class="form-control" type="text" placeholder="Enter your firstname" 
                                         name="name"value={Hotel.name} onChange={(e)=>onInputChange(e)}
                                       />
									</div>
								</div>
                                <div class="col-sm-6">
									<div class="form-group">
										<span class="form-label">City</span>
										<input class="form-control" type="text" placeholder="Enter your lastname"
                                         name="city"value={Hotel.city} onChange={(e)=>onInputChange(e)}/>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<span class="form-label">Address</span>
										<input class="form-control" type="text" placeholder="Enter your email" 
                                        name="address"value={Hotel.address} onChange={(e)=>onInputChange(e)}/>
									</div>
								</div>
                                <div class="col-sm-6">
									<div class="form-group">
										<span class="form-label">Description</span>
										<input class="form-control" type="text" placeholder="Enter your email" 
                                        name="description"value={Hotel.description} onChange={(e)=>onInputChange(e)}/>
									</div>
								</div>
							</div>
							<div class="form-group">
								<span class="form-label">Price By Night</span>
								<input class="form-control" type="text" placeholder="Enter your phone number" 
                                 name="price"value={Hotel.price} onChange={(e)=>onInputChange(e)}/>
							</div>


							<div class="wrap">
								<button className='button'>Update </button>
							</div>
						</form>
					</div>
                 
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default EditHotel