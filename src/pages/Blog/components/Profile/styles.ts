import styled from "styled-components";

export const ProfileContainer = styled.section`
  display: flex;
  height: 212px;
  background: ${(props) => props.theme["squid-700"]};

  border-radius: 10px;
  margin-top: calc(0px - 5rem - 28px);

  padding: 2rem 2.5rem;
  gap: 2rem;

  position: relative;

  @media only screen and (max-width: 599px) {
    flex-direction: column;
    min-height: 212px;
    height: fit-content;
  }
`;

export const Cover = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;

  @media only screen and (max-width: 599px) {
    align-self: center;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.5rem;
    gap: 1rem;

    p {
      font-size: 1.5rem;
      font-weight: bold;
    }

    a {
      font-size: 0.75rem;
      font-weight: bold;
      line-height: 1.2;
      color: ${(props) => props.theme["blue-300"]};
      text-decoration: none;

      display: flex;
      justify-content: right;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }

  main {
    margin-bottom: 1.5rem;
    text-decoration: none;

    p {
      color: ${(props) => props.theme["blue-400"]};
      height: 52px;
      line-height: 1.5;
      font-size: 1rem;

      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  footer {
    display: flex;
    gap: 1.5rem;
    color: ${(props) => props.theme["blue-400"]};

    @media only screen and (max-width: 599px) {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export const Tag = styled.span`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  font-size: 1rem;
  white-space: nowrap;

  span {
    max-width: 300px;
    text-overflow: ellipsis;
    overflow: hidden;

    @media only screen and (max-width: 599px) {
      white-space: normal;
    }
  }

  svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${(props) => props.theme["blue-600"]};
  }
`;
