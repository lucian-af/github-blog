import styled from "styled-components";

export const SearchFormContainer = styled.form`
  input {
    width: 100%;
    height: 50px;

    padding: 0.75rem 1rem;

    border: 1px solid ${(props) => props.theme["squid-500"]};
    border-radius: 6px;
    background: ${(props) => props.theme["gray-900"]};

    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme["blue-400"]};

    &::placeholder {
      color: ${(props) => props.theme["blue-600"]};
    }
  }
`;
