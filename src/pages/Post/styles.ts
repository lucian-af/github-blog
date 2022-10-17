import styled from "styled-components";

export const PostInfo = styled.header`
  display: flex;
  flex-direction: column;

  height: 212px;
  background: ${(props) => props.theme["squid-700"]};

  border-radius: 10px;
  margin-top: calc(0px - 5rem - 28px);

  padding: 2rem 2.5rem;
  gap: 2rem;

  position: relative;

  a {
    text-decoration: none;
    font-size: 0.75rem;
    color: ${(props) => props.theme["blue-300"]};

    span {
      margin: 0 0.5rem;
    }
  }

  footer {
    display: flex;
    gap: 2rem;
  }

  @media only screen and (max-width: 599px) {
    flex-direction: column;
    min-height: 212px;
    height: fit-content;

    footer {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

export const PostInfoLinks = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const PostContent = styled.main`
  display: block;
  padding: 2.5rem 2rem;
  white-space: pre-wrap;

  img {
    width: 100%;
  }

  @media only screen and (max-width: 599px) {
    padding: 2rem 1rem;
  }
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.6;
  font-size: 1rem;
  font-weight: 400;

  gap: 0.5rem;

  color: ${(props) => props.theme["blue-500"]};
`;
