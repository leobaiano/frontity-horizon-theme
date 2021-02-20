import { styled } from "frontity";

const ItemNavigation = ({ children }) => {
    return (
        <ItemNavigationContainer>
            {children}
        </ItemNavigationContainer>
    );
};

export default ItemNavigation;

const ItemNavigationContainer = styled.li `
    list-style: none;
    border-bottom: 3px transparent solid;
    display: block;
    position: relative;
    width: 100%;

    @media screen and (min-width: 1024px) {
        width: initial;
    }

    :after {
        @media screen and (min-width: 1024px) {
            width: 1px;
            content: '';
            display: block;
            height: 12px;
            position: absolute;
            right: 0;
            background: #aac54b;
            top: 50%;
            margin-top: -2px;
        }
    }

    a {
        text-transform: uppercase;
        color: #fff;
        font-weight: bold;
        line-height: 1;
        text-decoration: none;
        position: relative;
        display: block;
        padding: 20px;
        border-bottom: 3px #aac54b solid;

        :hover ,
        &.active {
            border-bottom: 3px #aac54b solid;
            color: #aac54b ;

        }

        @media screen and (min-width: 1024px) {
            padding: 61px 30px 51px;
            border-bottom: 3px transparent solid;
        }
    }
`;


