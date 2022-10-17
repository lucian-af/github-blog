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

export const PostListVoid = styled.p`
  display: flex;
  width: 100%;
  justify-content: center;
  color: ${(props) => props.theme["blue-500"]};
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
  display: inline-grid;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  height: 260px;

  border-radius: 10px;
  background: ${(props) => props.theme["squid-600"]};

  cursor: pointer;

  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${(props) => props.theme["blue-600"]};
  }

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

      display: -webkit-box;
      white-space: pre-line;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    time {
      color: ${(props) => props.theme["blue-500"]};
      font-size: 0.875rem;
      text-transform: capitalize;
      text-align: right;

      width: 100px;
      flex-basis: 50%;
      margin-top: 0.4rem;

      @media only screen and (max-width: 599px) {
        flex-basis: 100%;
      }
    }
  }
`;

export const PostItemPrevia = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-wrap: break-word;

  height: fit-content;

  * {
    font-size: 1rem;
    font-weight: 400;
  }
`;
