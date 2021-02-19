import { connect, styled } from "frontity";
import Item from "./item";
import HorizonLink from "./horizon-link";

const MainNavigation = ({ state }) => (
    <MainNavigationContainer>
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
    display: flex;
    align-items: center;
    margin; 0;
    padding: 0;
    font-size: 12px;
`;

const ListContainer = styled.ul `
    list-style: none;
    display: flex;
    justify-content: left;
    margin: 0;
    padding: 0;
`;
