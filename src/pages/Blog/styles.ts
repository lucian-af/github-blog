import styled from "styled-components";

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

export const PostList = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin-top: 2.5rem;

  @media only screen and (max-width: 599px) {
    display: flex;
    flex-direction: column;
  }
`;

export const PostItem = styled.div`
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
    gap: 1rem;

    h1 {
      color: ${(props) => props.theme["blue-100"]};
      font-size: 1.25rem;
      line-height: 1.6;
      margin: 0;
    }

    span {
      color: ${(props) => props.theme["blue-500"]};
      font-size: 0.875rem;
      width: 100px;
      line-height: 2.3;
      text-align: right;
    }
  }

  p {
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
