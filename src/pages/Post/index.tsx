import { useCallback, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { PostContent, PostInfo, PostInfoLinks, Tag } from "./styles";
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { dateFormatted, dateRelativeToNow } from "../../utils/FormatDate";

type RouteProps = {
  id: string;
};

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

export function Post() {
  const routeProps = useParams<RouteProps>();
  const [post, setPost] = useState<PostProps>();
  const comentarios =
    post?.comments === 0
      ? "nenhum comentário"
      : post?.comments === 1
      ? "1 comentário"
      : `${post?.comments} comentários`;

  const repoSearchDefault = import.meta.env.BLOG_REPO_DEFAULT;

  const getPost = useCallback(async () => {
    const response = await api.get(
      `repos/${repoSearchDefault}/issues/${routeProps.id}`
    );

    const data = response.data;

    setPost((state) => {
      return {
        ...state,
        number: data.number,
        title: data.title,
        comments: data.comments,
        createdAt: data.created_at,
        body: data.body,
        htmlUrl: data.html_url,
        user: {
          login: data.user.login,
        },
      };
    });
  }, [repoSearchDefault, routeProps]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  if (post) {
    return (
      <>
        <PostInfo>
          <PostInfoLinks>
            <NavLink to="/">
              <div>
                <FontAwesomeIcon icon={faChevronLeft} />
                <span>VOLTAR</span>
              </div>
            </NavLink>
            <a href={post.htmlUrl} target="_blank" rel="noreferrer">
              <div>
                <span>VER NO GITHUB</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </a>
          </PostInfoLinks>
          <section>
            <h1>{post.title}</h1>
          </section>
          <footer>
            <Tag>
              <FontAwesomeIcon icon={faGithub} />
              {post.user.login}
            </Tag>

            <Tag>
              <FontAwesomeIcon icon={faCalendarDay} />
              <time
                title={dateFormatted(new Date(post.createdAt))}
                dateTime={new Date(post.createdAt).toISOString()}
              >
                {dateRelativeToNow(new Date(post.createdAt))}
              </time>
            </Tag>

            <Tag>
              <FontAwesomeIcon icon={faComment} />
              {comentarios}
            </Tag>
          </footer>
        </PostInfo>
        <PostContent>
          <ReactMarkdown linkTarget="_blank">{post.body}</ReactMarkdown>
        </PostContent>
      </>
    );
  } else {
    return <PostContent>Nenhum post encontrado.</PostContent>;
  }
}
