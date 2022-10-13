import { LoadingContainer } from "./styles";
import faviconImg from "../../assets/favicon.svg";

export function Loading() {
  return (
    <LoadingContainer>
      <img src={faviconImg} alt="" />
    </LoadingContainer>
  );
}
