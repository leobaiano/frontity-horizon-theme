import { connect, styled } from "frontity";
import MainHeader from "./header";
import Logo from "./logo";
import MainNavigation from "../main-navigation";
import { CloseIcon, HamburgerIcon } from "../main-navigation/menu-icons";

function Header({ state, actions }) {
    const { isMobileMenuOpen } = state.theme;

    return (
        <>
            <MainHeader>
                <Logo />
                <MainNavigation />
                <MenuIconContainer onClick={actions.theme.toggleMobileMenu}>
                    {isMobileMenuOpen ? (
                        <CloseIcon size="25px" color="#FFFFFF" />
                    ) : (
                        <HamburgerIcon size="25px" color="#FFFFFF" />
                    )}
                </MenuIconContainer>
            </MainHeader>
        </>
    );
}

export default connect(Header);

const MenuIconContainer = styled.div `
    padding: 10px 20px 0 20px;
    text-align: right;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;
