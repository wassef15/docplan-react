import React from 'react';
import './Header.css';
const tabHeader = [{
    image: 'https://www.docplanner.com/img/sygnet.png',
    title: 'Making the healthcare experience more human',
    part1: "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.",
    part2: "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.",
}

];
const Header = () => {
    return( 
        tabHeader.map(el => (
            <div className="header">
                <img src={el.image}/>
                <h1>{el.title}</h1>
                <div className="articles"> 
                    <p>{el.part1}</p>
                    <p>{el.part2}</p>
                </div>
            </div>
    ))
    )


}

export default Header;