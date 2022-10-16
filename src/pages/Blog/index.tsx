import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import {
  FormHeader,
  PostItem,
  PostItemPrevia,
  PostList,
  PostListVoid,
} from "./styles";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

type PostProps = {
  number: number;
  title: string;
  comments: number;
  createdAt: string;
  body: string;
  htmlUrl: string;
  user: {
    login: string;
  };
};

type Posts = {
  totalCount: number;
  items: PostProps[];
};

export function Blog() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState({} as Posts);
  const repoSearchDefault = "";

  const publicacoes = posts.totalCount === 1 ? "publicação" : "publicações";

  const getPosts = useCallback(
    async (filter: string) => {
      const response = await api.get("/search/issues", {
        params: {
          _sort: "created_at",
          _order: "desc",
          q: `${filter}${repoSearchDefault ? `repo:${repoSearchDefault}` : ""}`,
        },
      });

      const items: PostProps[] = response.data?.items.map((item: any) => {
        return {
          number: item.number,
          title: item.title,
          comments: item.comments,
          createdAt: item.created_at,
          body: item.body,
          htmlUrl: item.html_url,
          user: item.user.login,
        } as PostProps;
      });

      setPosts((state) => {
        return {
          ...state,
          totalCount: response.data.total_count,
          items,
        };
      });
    },
    [repoSearchDefault]
  );

  function handleVisualizarPost(numeroPost: number) {
    if (!numeroPost) return;

    navigate(`post/${numeroPost}`);
  }

  function handleFiltrarPosts(filtro: string) {
    if (filtro) {
      getPosts(filtro);
    }
  }

  useEffect(() => {
    getPosts("");
  }, [getPosts]);

  return (
    <>
      <Profile />

      <FormHeader>
        <span>Publicações</span>
        {posts.totalCount > 0 && (
          <span>
            {posts.totalCount} {publicacoes}
          </span>
        )}
      </FormHeader>

      <SearchForm filter={handleFiltrarPosts} />

      <PostList>
        {posts?.items &&
          posts?.items?.map((post) => {
            return (
              <PostItem
                key={post.number}
                onClick={() => handleVisualizarPost(post.number)}
              >
                <header>
                  <h1>{post.title}</h1>
                  <span>Há 1 dia</span>
                </header>
                <PostItemPrevia>
                  <ReactMarkdown>{post.body.substring(0, 80)}</ReactMarkdown>
                </PostItemPrevia>
              </PostItem>
            );
          })}
      </PostList>

      {!posts.items && <PostListVoid>Nenhum post encontrado!</PostListVoid>}
    </>
  );
}
