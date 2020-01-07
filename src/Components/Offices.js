import React from "react";
import "./Offices.css";
const tabOff = [
  {
    title: "Improve the lives of millions. Change yours forever",
    parag:
      "More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops."
  }
];
const tabCards = [
  {
    image: "https://www.docplanner.com/images/warsaw.png",
    title: "WarSaw",
    button: "See openings"
  },
  {
    image: "https://www.docplanner.com/images/barcelona.png",
    title: "Barcelona",
    button: "See openings"
  },
  {
    image: "https://www.docplanner.com/images/istanbul.png",
    title: "istanbul",
    button: "see openings"
  },
  {
    image: "https://www.docplanner.com/images/rome.png",
    title: "Rome",
    button: "See openings"
  },
  {
    image: "https://www.docplanner.com/images/mexico-city.png",
    title: "Mexico City",
    button: "see openings"
  },
  {
    image: "https://www.docplanner.com/images/curitiba.png",
    title: "Curitiba",
    button: "See openings"
  }
];

const Offices = () => (
  <div className="Offices">
    {tabOff.map(el => (
      <div className="office-header">
        <h1> {el.title}</h1>
        <p> {el.parag}</p>
      </div>
    ))}
    <div className="office-card">
      {tabCards.map(elm => (
        <div className="card">
          <div className="card-item">
            <img src={elm.image} />
            <div className="block">
            <p> {elm.title}</p>
            <span className="looks-like-button">{elm.button}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Offices;
