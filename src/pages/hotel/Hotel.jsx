import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";


export default function Hotel  ()  {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const location =useLocation();
  const id=location.pathname.split("/")[2];


  const [dd,setDd]=useState([]);




  const [data,setData]=useState([]);
  useEffect(()=>{
    loadHotel();
    loadDd();
  });
  const loadHotel=async()=>{
    const result=await axios.get(`http://localhost:8080/hotel/${id}`);
    setData(result.data);
       
  };
 
  const loadDd=async()=>{
    const res=await axios.get("http://localhost:8080/days"); 
    setDd(res.data);
  };
  

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
   
    <div>
      
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
      
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
        
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.city}</span>
          </div>
          <span className="hotelDistance">
            Excellent location – Montplaisir
          </span>

          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle"> Angle Ibn Nadim et Chabia 1073 Montplaisir / Tunis, 1073 Tunis, Tunisia</h1>
              <p className="hotelDesc">
              Located in Tunis, 14.3 km from Salammbo Tophet Archaeological Museum, Marigold Hotel provides accommodations with a restaurant, free private parking, a bar and a shared lounge. Featuring family rooms, this property also provides guests with a terrace. The property has a 24-hour front desk, room service and currency exchange for guests.

The hotel will provide guests with air-conditioned rooms offering a closet, an electric tea pot, a minibar, a safety deposit box, a flat-screen TV and a private bathroom with a shower. Free WiFi is available to all guests, while selected rooms come with a balcony.

Continental and buffet breakfast options are available daily at Marigold Hotel.

Guests can use the business center or relax in the snack bar.

Habib Bourguiba Avenue is 2.3 km from the accommodation, while Belvedre Parc is 1.8 km away. The nearest airport is Tunis–Carthage, 8 km from Marigold Hotel, and the property offers a paid airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>7-Nights stay!</h1>
              <span>
                All inclusive :
                <br/>Breakfast,Lunch,Dinner
              </span>
              <h2>
                <b>{data.price} DT</b> (7 Nights)
              </h2>
             <button>Reserve Now!</button>
            </div>
          </div>
        </div>
       
      </div>
      
    </div>
  );
};

