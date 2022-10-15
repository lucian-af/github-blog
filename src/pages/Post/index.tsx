import { useParams } from "react-router-dom";
import { PostContainer } from "./styles";

type PostProps = {
  id: string;
};

export function Post() {
  const postProps = useParams<PostProps>();
  return (
    <PostContainer>
      <h1>Issue: {postProps.id}</h1>
    </PostContainer>
  );
}
