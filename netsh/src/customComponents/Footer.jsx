import React,{ useState, useEffect } from 'react';
import { Nav, NavLink } from './StyledElements';
import netshLogo from '../assets/netshLogo.png';



const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "black", display: "flex", justifyContent: "space-around", alignItems: "center", width: "100vw", padding: "20px", color: "white", fontFamily: 'Nunito Sans',}}>
        <img
          src={netshLogo}
          width='120px'/>
        <p>Copyright © 2022 Netsh, <a style={{ color: "white", }} href='https://twitter.com/itsjojoduke1'>Jojo Duke</a></p>
      </div>
    </>
  )
}

export default Footer;