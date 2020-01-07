import React from "react";
import "./NavBar.css";
const tabDrop=[
{ text:'Marketing & PR',
  lien:'/department?dep=marketing'
},
{ text:'Customer Succes & Sales',
  lien:'/department?dep=customer'
},
{ text:'IT & Product Design & UX',
  lien:'"/department?dep=it'
},
{ text:'Finance & administration',
  lien:'"/department?dep=finance'
},
{ text:'HR & more',
  lien:'/department?dep=hr'
}

]

const NavBar = props => (
  <li>
    <a className={props.item.active ? "active" : undefined} href={props.link}>
      {props.item.title}
{props.item.title==='Departments'&&<ul className="drop">{tabDrop.map(elm=><li> <a href={elm.lien}>{ elm.text}</a></li>)}</ul>}
    </a>
  </li>
);
export default NavBar;
