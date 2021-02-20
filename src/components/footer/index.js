import { connect, styled } from "frontity";
import { Container } from "../styles/blocks";
import HorizonLink from "../main-navigation/horizon-link";

function Footer({ state, actions }) {
    return (
        <>
            <FooterContainer>
                <FooterSection>
                    <Container>
                        <FooterBlockInfo>
                            <FooterInfo>
                                Phone: {state.theme.contacts.email} | <HorizonLink link={state.theme.contacts.email}>{state.theme.contacts.email}</HorizonLink>
                            </FooterInfo>
                        </FooterBlockInfo>
                        <FooterBlockInfo>
                            <FooterInfo>000 Client Street, Minas Gerais BH, Brazil</FooterInfo>
                        </FooterBlockInfo>
                    </Container>
                </FooterSection>
                <FooterSection bgColor="rgba(51, 56, 56)">
                    <Container>
                        <FooterBlockInfo>
                            <FooterInfo>
                                Copyright © 2021 <HorizonLink link={state.frontity.url}>{state.frontity.title}</HorizonLink> - All rights reserved | Powered by <HorizonLink link="https://wordpress.org/">WordPress</HorizonLink>
                            </FooterInfo>
                        </FooterBlockInfo>
                    </Container>
                </FooterSection>
            </FooterContainer>
        </>
    );
}

export default connect(Footer);

const FooterContainer = styled.footer`
    width: 100%;
`;

const FooterSection = styled.section`
    background-color: ${(props) => (props.bgColor ? props.bgColor : "#aac54b")};
    padding: 20px 0;
`;

const FooterBlockInfo = styled.div `
    text-align: center;
    margin-bottom: 40px;
    &:last-child {
        margin-bottom: 0;
    }
`;

const FooterInfo = styled.p `
    color: #FFFFFF;
    font-family: "Roboto", sans-serif;
    font-size: 14px;

    a {
        color: #9f9f9f;
        text-decoration: none;

        &:hover,
        &:active,
        &:focus {
            color: #9f9f9f;
            text-decoration: underline;
        }
    }
`;
