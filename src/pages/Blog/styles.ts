import styled from "styled-components";

export const BlogContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto 4rem;
  padding: 0 6rem;

  @media only screen and (max-width: 599px) {
    flex-direction: column;

    padding: 0 2rem;
  }
`;

export const FormHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 4.5rem 0 0.75rem;

  span:first-child {
    font-size: 1.125rem;
    font-weight: 700;
    text-transform: capitalize;

    color: ${(props) => props.theme["blue-200"]};
  }

  span:last-child {
    font-size: 0.875rem;
    font-weight: 400;

    color: ${(props) => props.theme["blue-500"]};
  }
`;

export const Posts = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin-top: 2.5rem;

  @media only screen and (max-width: 599px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;

  border-radius: 10px;
  background: ${(props) => props.theme["squid-600"]};

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color: ${(props) => props.theme["blue-100"]};

    span {
      color: ${(props) => props.theme["blue-500"]};
      font-size: 0.875rem;
    }
  }
`;
