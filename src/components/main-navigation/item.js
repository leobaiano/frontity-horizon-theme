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

    :after {
        content: '';
        display: block;
        width: 1px;
        height: 12px;
        position: absolute;
        right: 0;
        background: #aac54b;
        top: 50%;
        margin-top: -1px;
    }

    a {
        text-transform: uppercase;
        color: #fff;
        font-weight: bold;
        padding: 61px 30px 51px;
        line-height: 1;
        text-decoration: none;
        position: relative;
        display: block;

        :hover ,
        &.active {
            border-bottom: 3px #aac54b solid;
            color: #aac54b ;
        }
    }
`;


