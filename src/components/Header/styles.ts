import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;

  max-width: 100%;
  z-index: -1;
`;

export const BannerImg = styled.img`
  width: 100%;
  height: 296px;
  object-fit: cover;
`;

export const LogoImg = styled.img`
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
