import { NavLink } from "react-router-dom"
import { HeaderContainer, Logo, NavLinkInput, NavLinks, Navbar } from "../../styles/header"


export const Header = () => {
        return(
        <HeaderContainer>
          <Navbar>
            <Logo>PROJETINHO CHINES</Logo>
            <NavLinks>
                <NavLinkInput>
                    <NavLink 
                        to={"/"} 
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "black",
                                viewTransitionName: isTransitioning ? "slide" : "",
                            }}}>
                        Home
                    </NavLink>
                </NavLinkInput>
                <NavLinkInput>
                    <NavLink 
                        to={"/carrinho"}
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "black",
                                viewTransitionName: isTransitioning ? "slide" : "",
                            }}}>
                        Carrinho
                    </NavLink>
                </NavLinkInput>
                <NavLinkInput>
                    <NavLink 
                        to={"/contato"}
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "black",
                                viewTransitionName: isTransitioning ? "slide" : "",
                            }}}>
                        Contato
                    </NavLink>
                </NavLinkInput>
            </NavLinks>
          </Navbar>
        </HeaderContainer>
        )
}