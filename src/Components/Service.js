import React from "react";
import "./Service.css";
const tabServ = [
  {
    title1: "For patients",
    title2: "Find a doctor, book a visit and solve any health-related doubt",
    img: "https://www.docplanner.com/img/screen-marketplace@2x.png"
  },
  {
    title1: "For doctors",
    title2: "Save time managing visits and cut no-shows by half",
    img: "https://www.docplanner.com/img/screen-saas@2x.png"
  }
];
const TabCountry = [
  { title: "Choose country " },
  {
    title: "Argentina",
    link: "http://www.doctoraliar.com"
  },
  {
    title: "Australia",
    link: "http://www.doctoraliar.au"
  },
  {
    title: "Australia",
    link: "http://www.doctoraliar.com"
  },
  {
    title: "Brazil",
    link: "http://www.doctoraliar.com"
  },
  {
    title: "Chile",
    link: "http://www.doctoraliar.com"
  },
  {
    title: "Colombia",
    link: "http://www.doctoraliar.com"
  },
  {
    title: "Czech",
    link: "http://www.doctoraliar.com"
  },
  {
    title: "France",
    link: "http://www.doctoraliar.com"
  },
  {
    title: "Italy",
    link: "http://www.doctoraliar.com"
  },
  {
    title: "Mexico",
    link: "http://www.doctoraliar.com"
  },
  {
    title: "Peru",
    link: "http://www.doctoraliar.com"
  }
];

const Service = () => {
  return (
    <div className="service">
      {tabServ.map(el => (
        <div className={el.title1 === "For patients" ? "patient" : "doctor"}>
          <div className="subservice">
            <h2>{el.title1}</h2>
            <p>{el.title2}</p>
            {el.title1 === "For patients" && (
              <select className="button">
                {TabCountry.map(ctn => (
                  <option value={ctn.link}>{ctn.title}</option>
                ))}
              </select>
            )}
            <img src={el.img} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
