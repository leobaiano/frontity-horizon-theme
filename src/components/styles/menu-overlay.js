import { styled } from "frontity";

export const MenuOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  z-index: 1;
  height: 100vh;
  width: 100%;
  display: ${props => props.isVisible ? "block" : "none"};
`;
