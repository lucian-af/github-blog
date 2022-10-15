import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer, Main } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </LayoutContainer>
  );
}
