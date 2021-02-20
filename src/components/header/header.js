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
    background-color: rgba(51, 56, 56);
    overflow: hidden;

    @media screen and (max-width: 768px) {
        height: 80px;
    }
    
    @media screen and (min-width: 1024px) {
        height: 125px;
    }

    ${Container} {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (max-width: 768px) {
            height: 100%;
            position: initial;
        }
    }
`;
