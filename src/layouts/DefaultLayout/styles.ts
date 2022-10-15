import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;

  margin: 0 auto;
`;

export const Main = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 6rem 6rem;

  @media only screen and (max-width: 599px) {
    flex-direction: column;

    padding: 0 2rem 2rem;
  }
`;
