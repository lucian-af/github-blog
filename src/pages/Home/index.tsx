import { Header } from "../../components/Header";
import { Profile } from "./components/Profile";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <div>
      <Header />

      <HomeContainer>
        <Profile />
      </HomeContainer>
    </div>
  );
}
