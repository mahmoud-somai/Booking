import React from 'react'
import './Check.css'
import back from  '../../assets/my-account.jpg'
import Navbar from '../../components/navbar/Navbar'

const Check = () => {
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
                            <h1>Check</h1>
                            </div>
                    </div>
						<form>
							<div class="row">
								<div class="col-sm-6">
									<div class="form-group">
										<span class="form-label">Firstname</span>
										<input class="form-control" type="text" placeholder="Enter your firstname"/>
									</div>
								</div>
                                <div class="col-sm-6">
									<div class="form-group">
										<span class="form-label">Lastname</span>
										<input class="form-control" type="text" placeholder="Enter your lastname"/>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<span class="form-label">Email</span>
										<input class="form-control" type="email" placeholder="Enter your email"/>
									</div>
								</div>
							</div>
							<div class="form-group">
								<span class="form-label">Phone</span>
								<input class="form-control" type="tel" placeholder="Enter your phone number"/>
							</div>
		

							<div class="wrap">
								<button className='button'>Book Now</button>
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

export default Check