import React,{ useState, useEffect } from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBtnLink2,
  BarsOverlay,
  CloseBars,
} from './NavbarElements';
import netshLogo from '../assets/netshLogo.png'

const Navbar = () => {
  const [openHamburger, setOpenHamburger] = useState(false);

  const onHamburgerClicked = () => {
    alert("Hjey")
  }

  return (
    <>
          <Nav>
            <BarsOverlay>
              <CloseBars/>
              <NavBtn>
                <NavBtnLink2 to="/">Login</NavBtnLink2>
                <NavBtnLink to="/">Get Started for Free</NavBtnLink>
              </NavBtn>
            </BarsOverlay>
                <NavLink to='/'>
                <img
                        src={netshLogo}
                        width='120px'/>
                </NavLink>
                <Bars onclick={onHamburgerClicked}/>
                
                <NavBtn>
                  <NavBtnLink2 to="/">Login</NavBtnLink2>
                  <NavBtnLink to="/">Get Started for Free</NavBtnLink>
                </NavBtn>
          </Nav>
        </>
  )
}

export default Navbar;