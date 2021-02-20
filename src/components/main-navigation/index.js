import { connect, styled } from "frontity";
import Item from "./item";
import HorizonLink from "./horizon-link";

const MainNavigation = ({ state }) => (
    <MainNavigationContainer isMobileMenuOpen={state.theme.isMobileMenuOpen}>
        <ListContainer>
            {state.theme.menu.map(([name, link]) => {
                const isCurrentPage = state.router.link === link;
                return (
                    <Item key={name}>
                        <HorizonLink link={link} className={isCurrentPage ? "active" : undefined} aria-current={isCurrentPage ? "page" : undefined}>
                            {name}
                        </HorizonLink>
                    </Item>
                )
            })}
        </ListContainer>
    </MainNavigationContainer>
);
export default connect(MainNavigation);

const MainNavigationContainer = styled.nav `
    display: ${props => props.isMobileMenuOpen ? "flex" : "none"};
    margin; 0;
    padding: 0;
    font-size: 12px;
    position: absolute;
    height: 100vh;
    left: 0;
    top: 0;
    background-color: rgba(51, 56, 56);
    width: 70%;
    flex-direction: column;
    z-index: 2;
    
    @media screen and (min-width: 1024px) {
        position: initial;
        height: initial;
        background-color; transparent;
        width: initial;
        align-items: center;
        flex-direction: row;
        display: flex;
    }
`;

const ListContainer = styled.ul `
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: column;
    width: 100%;

    @media screen and (min-width: 1024px) {
        justify-content: left;
        flex-direction: row;
        width: initial;
    }
`;
