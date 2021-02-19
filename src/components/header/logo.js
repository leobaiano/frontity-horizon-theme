import { connect, styled } from "frontity";

const Logo = ({ state }) => {
    return (
        <LogoContainer>
            <img src={state.theme.logo} />
        </LogoContainer>
    );
};

export default connect(Logo);

const LogoContainer = styled.div `
    max-width: 148px;

    img {
        width: 100%;
    }
`;


