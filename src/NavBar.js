import React from 'react';


const NavBar = (props) => {
  return (

    <ul className="nav">
      {props.array.map(el =>
        <li className="list-nav"><a className={el.active ? 'active' : undefined} href="#">{el.title}</a>
          {el.submenu ? <ul className="list-subMenu">{el.submenu.map(el => <li className="sub-menu-item">{el}</li>)}</ul> : null}    
        </li>)}
    </ul>






  );
}

export default NavBar;
