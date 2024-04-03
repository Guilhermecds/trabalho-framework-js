import { NavLink } from "react-router-dom"
import { HeaderContainer, Logo, NavLinkInput, NavLinks, Navbar, StyledNavLink } from "../../styles/header"


export const Header = () => {
        return(
        <HeaderContainer>
          <Navbar>
            <Logo>PROJETINHO CHINES</Logo>
            <NavLinks>
                <StyledNavLink
                        to={"/"} 
                        style={({ isActive}) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                            }}}>
                        Home
                </StyledNavLink>
                <StyledNavLink
                        to={"/carrinho"}
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                            }}}>
                        Carrinho
                </StyledNavLink>
                <StyledNavLink
                        to={"/contato"}
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                            }}}>
                        Contato
                </StyledNavLink>
            </NavLinks>
          </Navbar>
        </HeaderContainer>
        )
}