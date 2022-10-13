import { Header } from "../../components/Header";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { BlogContainer, FormHeader, Post, Posts } from "./styles";

export function Blog() {
  return (
    <div>
      <Header />

      <BlogContainer>
        <Profile />

        <FormHeader>
          <span>Publicações</span>
          <span>6 publicações</span>
        </FormHeader>

        <SearchForm />

        <Posts>
          <Post>
            <header>
              <h1>Titulo 1</h1>
              <span>Há 1 dia</span>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              iusto perferendis veniam repellendus quam quasi rem nemo
              laboriosam iste molestias cumque porro, atque iure fugit aut,
              maiores reiciendis optio facere!
            </p>
          </Post>

          <Post>
            <header>
              <h1>Titulo 2</h1>
              <span>Há 2 dias</span>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              iusto perferendis veniam repellendus quam quasi rem nemo
              laboriosam iste molestias cumque porro, atque iure fugit aut,
              maiores reiciendis optio facere!
            </p>
          </Post>
        </Posts>
      </BlogContainer>
    </div>
  );
}
