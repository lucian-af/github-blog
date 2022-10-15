import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { FormHeader, PostItem, PostList } from "./styles";

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
  const [posts, setPosts] = useState({} as Posts);
  const repoSearchDefault = import.meta.env.BLOG_REPO_DEFAULT;

  const publicacoes = posts.totalCount === 1 ? "publicação" : "publicações";

  const getPosts = useCallback(
    async (filter: string) => {
      const response = await api.get("/search/issues", {
        params: {
          q: `${filter}repo:${repoSearchDefault}`,
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

  useEffect(() => {
    getPosts("");
  }, [getPosts]);

  return (
    <>
      <Profile />

      <FormHeader>
        <span>Publicações</span>
        <span>
          {posts.totalCount} {publicacoes}
        </span>
      </FormHeader>

      <SearchForm />

      <PostList>
        {posts?.items?.map((post) => {
          return (
            <PostItem key={post.number}>
              <header>
                <h1>{post.title}</h1>
                <span>Há 1 dia</span>
              </header>
              <p>{post.body}</p>
            </PostItem>
          );
        })}
      </PostList>
    </>
  );
}
