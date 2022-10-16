import { NavLink, useNavigate } from "react-router-dom";
import Banner from "../../assets/banner.svg";
import Logo from "../../assets/logo.svg";
import { LogoImg, HeaderContainer, BannerImg } from "./styles";

export function Header() {
  return (
    <NavLink to="/">
      <HeaderContainer>
        <BannerImg src={Banner} alt="" />
        <LogoImg src={Logo} alt="" />
      </HeaderContainer>
    </NavLink>
  );
}
