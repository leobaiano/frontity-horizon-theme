import { styled } from "frontity";

export const Container = styled.div`
  padding: 0 20px;
  display: block;
  position: relative;
  margin: 0 auto;
  height: 100%;

  @media screen and (min-width: 768px) {
    width: 750px;
  }

  @media screen and (min-width: 992px) {
    width: 970px;
  }

  @media screen and (min-width: 1200px) {
    width: 1170px;
  }
`;
