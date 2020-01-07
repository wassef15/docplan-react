import React from "react";
import "./Platforme.css";
const TabBox = [
  {
    img: "https://www.docplanner.com/img/flag.png",
    title1: "Leader in 10 countries",
    title2:
      "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
  },
  {
    img: "https://www.docplanner.com/img/visits.png",
    title1: "1.5 million appointments",
    title2: "booked last month"
  },
  {
    img: "https://www.docplanner.com/img/patients.png",
    title1: "30 million unique patients",
    title2: "visit us every month"
  },
  {
    img: "https://www.docplanner.com/img/doctors.png",
    title1: "2 million active doctors",
    title2: "trust in our solutions"
  }
];
const Platforme = props => (
  <div className="platform">
      <div className='section-width'>
      <div className='platStar'>
          <h1>{props.element.title}</h1>
    <p>{props.element.parag}</p>
    <img src={props.element.img}  className='imgPlat'/>
    </div>
    
    <div className="boxs">
      {TabBox.map(el => (
        <div className="box-item">
            <div className='item'>
          <img src={el.img} />
          <h3> {el.title1}</h3>
          <p>{el.title2}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  </div>
);

export default Platforme;
