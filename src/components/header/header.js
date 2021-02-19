import { styled } from "frontity";
import { Container } from "../styles/blocks";

const Header = ({ children, ...props }) => (
    <HeaderContainer {...props}>
        <Container>
            {children}
        </Container>
    </HeaderContainer>
);

export default Header;

const HeaderContainer = styled.header`
    width: 100%;
    background-color: rgba(41, 44, 46, 0.9);
    height: 127px;
    overflow: hidden;

    ${Container} {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
