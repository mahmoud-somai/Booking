import "./searchItem.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function SearchItem ()  {
  const [hotels,setHotels]=useState([]);
  useEffect(()=>{
    loadHotels()    
  },[]);
  const loadHotels=async()=>{
    const result=await axios.get("http://localhost:8080/hotels"); 
    setHotels(result.data);
  };
 

  return (
    <div>
    {hotels.map((hotel)=>(
    
      
    <div className="searchItem" >
      
       
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      
      <div className="siDesc">
        <h1 className="siTitle">{hotel.name}</h1>
        <span className="siDistance">{hotel.city}</span>
        <span className="siTaxiOp">All inclusive soft</span>
        <span className="siSubtitle">
          Standart Double Room
        </span>
        <span className="siFeatures">
            1 queen bed
        </span>
        <span className="siCancelOp">Free cancellation , no prepayment needed </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{hotel.price} Dt</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${hotel.id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
         
    </div>
    ))}
    </div>
  );
};

