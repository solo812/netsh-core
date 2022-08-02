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
} from './StyledElements';
import netshLogo from '../assets/netshLogo.png'

const Navbar = () => {
  const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);

  const handleHamburger = () => {
    setIsHamburgerOpened(true);
  }

  const handleCloseHamburger = () => {
    setIsHamburgerOpened(false);
  }

  return (
    <>
          <Nav>
            <BarsOverlay style={{  display: isHamburgerOpened ? "block" : "none",  }}>
              <CloseBars onClick={handleCloseHamburger}/>
              <NavBtn style={{  display: isHamburgerOpened ? "flex" : "none",  }}>
                <NavBtnLink2 to="/">Login</NavBtnLink2>
                <NavBtnLink to="/">Get Started for Free</NavBtnLink>
              </NavBtn>
            </BarsOverlay>
                <NavLink to='/'>
                <img
                        src={netshLogo}
                        width='120px'/>
                </NavLink>
                <Bars onClick={handleHamburger}/>
                
                <NavBtn>
                  <NavBtnLink2 to="/">Login</NavBtnLink2>
                  <NavBtnLink to="/">Get Started for Free</NavBtnLink>
                </NavBtn>
          </Nav>
        </>
  )
}

export default Navbar;