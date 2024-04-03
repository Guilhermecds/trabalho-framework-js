import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  background-color: #333;
  padding: 10px 0;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const NavLinks = styled.div`
  display: flex;
`;

export const NavLinkInput = styled.a`
  margin: 10px;
  text-decoration: none;
`;

export const StyledNavLink = styled(NavLink)`
  margin: 10px;
  text-decoration: none;
  font-size: 24px;
  color: black;
  font-weight: normal;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fff; /* Change color on hover */
    font-weight: bold; /* Add bold weight on hover */
  }
`;
