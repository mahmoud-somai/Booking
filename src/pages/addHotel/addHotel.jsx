import React from 'react'
import Navbar from '../../components/navbar/Navbar'

import { useState } from 'react'
import hotelierService from '../../services/hotelier.service'
import hotelService from '../../services/hotel.service'

export default function AddHotelier  ()  {
    const [Hotel,setHotel]=useState({
        name:"",
        city:"",
        address:"",
        description:"",
        price:""
    });

    

    const onInputChange=(e)=>{
        const value=e.target.value;
        setHotel({...Hotel,[e.target.name]:value});
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        hotelService.saveHotel(Hotel).then((res)=>{
            console.log(res);
            console.log("success");
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
                            <h1>Add New Hotel</h1>
                            </div>
                    </div>
						<form onSubmit={(e)=>onSubmit(e)}>
							<div class="row">
								<div class="col-sm-6">
									<div class="form-group">
										<span class="form-label">Name</span>
										<input class="form-control" type="text" placeholder="Enter Hotel Name" 
                                         name="name"value={Hotel.name} onChange={(e)=>onInputChange(e)}
                                       />
									</div>
								</div>
                                <div class="col-sm-6">
									<div class="form-group">
										<span class="form-label">City</span>
										<input class="form-control" type="text" placeholder="Enter Hotel City"
                                         name="city"value={Hotel.city} onChange={(e)=>onInputChange(e)}/>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<span class="form-label">address</span>
										<input class="form-control" type="text" placeholder="Enter Hotel Address" 
                                        name="address"value={Hotel.address} onChange={(e)=>onInputChange(e)}/>
									</div>
								</div>
                                <div class="col-sm-6">
									<div class="form-group">
										<span class="form-label">Description</span>
										<input class="form-control" type="text" placeholder="Enter Hotel Description" 
                                         name="description"value={Hotel.description} onChange={(e)=>onInputChange(e)}
                                       />
									</div>
								</div>

							</div>
							<div class="form-group">
								<span class="form-label">Price By Night</span>
								<input class="form-control" type="text" placeholder="Enter Hotel Price By Night" 
                                 name="price"value={Hotel.price} onChange={(e)=>onInputChange(e)}/>
							</div>


							<div class="wrap">
								<button className='button'>Add</button>
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
