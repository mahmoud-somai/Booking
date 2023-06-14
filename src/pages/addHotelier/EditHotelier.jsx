import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import back from  '../../assets/my-account.jpg'
import { useState } from 'react'
import hotelierService from '../../services/hotelier.service'
import './addHotelier.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const EditHotelier = () => {
    const [Hotelier,setHotelier]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
    });

    const data=useParams();

    useEffect(()=>{
        hotelierService.getHotelierById(data.id).then((res)=>{
            setHotelier(res.data);
        }).catch((error)=>{
            console.log(error);
        });
    },[])

    const onInputChange=(e)=>{
        const value=e.target.value;
        setHotelier({...Hotelier,[e.target.name]:value});
    }

    const navigate=useNavigate();
    const onSubmit=(e)=>{
        e.preventDefault();
        hotelierService.updateHotelier(Hotelier.id,Hotelier).then((res)=>{
            console.log(res);
            console.log("success");
            navigate("/admin/hotelier");
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
                            <h1>EDIT HOTELIER</h1>
                            </div>
                    </div>
						<form onSubmit={(e)=>onSubmit(e)}>
							<div class="row">
								<div class="col-sm-6">
									<div class="form-group">
										<span class="form-label">Firstname</span>
										<input class="form-control" type="text" placeholder="Enter your firstname" 
                                         name="firstname"value={Hotelier.firstname} onChange={(e)=>onInputChange(e)}
                                       />
									</div>
								</div>
                                <div class="col-sm-6">
									<div class="form-group">
										<span class="form-label">Lastname</span>
										<input class="form-control" type="text" placeholder="Enter your lastname"
                                         name="lastname"value={Hotelier.lastname} onChange={(e)=>onInputChange(e)}/>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<span class="form-label">Email</span>
										<input class="form-control" type="email" placeholder="Enter your email" 
                                        name="email"value={Hotelier.email} onChange={(e)=>onInputChange(e)}/>
									</div>
								</div>
							</div>
							<div class="form-group">
								<span class="form-label">password</span>
								<input class="form-control" type="text" placeholder="Enter your phone number" 
                                 name="password"value={Hotelier.password} onChange={(e)=>onInputChange(e)}/>
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

export default EditHotelier