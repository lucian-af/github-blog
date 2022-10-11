import Banner from "../../assets/banner.svg";
import Logo from "../../assets/logo.svg";
import { LogoImg, HeaderContainer, BannerImg } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <BannerImg src={Banner} alt="" />
      <LogoImg src={Logo} alt="" />
    </HeaderContainer>
  );
}
