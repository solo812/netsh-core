import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: transparent;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 6rem;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-family: 'Nunito Sans', sans-serif;

  @media screen and (max-width: 768px) {
    padding: 0.5rem 2rem;
  }
`;

export const BarsOverlay = styled.div`
  background: #6E4BB1;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #49f5cd;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: white;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const CloseBars = styled(FaTimes)`
  display: none;
  color: white;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-top: 100px;
    flex-direction: column;
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #885AE0;
  padding: 10px 22px;
  color: #2D2046;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }

  @media screen and (max-width: 768px) {
    padding: 20px 0px;
    width: 650px;
    text-align: center;
  }
`;

export const NavBtnLinkResp = styled(Link)`
  border-radius: 4px;
  background: #885AE0;
  padding: 20px 0px;
  width: 650px;
  text-align: center;
  color: #2D2046;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink2 = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }

  @media screen and (max-width: 768px) {
    padding: 20px 0px;
    width: 650px;
    text-align: center;
    border: white 3px solid;
  }
`;