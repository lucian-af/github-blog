import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { Aside, Cover, ProfileContainer, Tag } from "./styles";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Loading } from "../../../../components/Loading";

type ProfileType = {
  name: string;
  company: string;
  avatarUrl: string;
  htmlUrl: string;
  followers: number;
  bio: string;
  login: string;
};

export function Profile() {
  const [user, setUser] = useState<ProfileType>({} as ProfileType);

  const userSearch = import.meta.env.BLOG_USER_DEFAULT;

  const followers =
    user.followers > 1
      ? `${user.followers} seguidores`
      : `${user.followers} seguidor`;

  useEffect(() => {
    async function getUser() {
      const response = await api.get(`/users/${userSearch}`);
      const data = response.data;

      setUser({
        name: data.name,
        avatarUrl: data.avatar_url,
        htmlUrl: data.html_url,
        company: data.company,
        followers: data.followers,
        bio: data.bio,
        login: data.login,
      });
    }

    getUser();
  }, [userSearch]);

  if (!user.login) {
    return (
      <ProfileContainer>
        <Loading />
      </ProfileContainer>
    );
  } else
    return (
      <ProfileContainer>
        <Cover src={user.avatarUrl} alt="" />

        <Aside>
          <header>
            <p>{user.name}</p>
            <a href={user.htmlUrl} target="_blank" rel="noreferrer">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </header>
          <main>
            <p>{user.bio}</p>
          </main>
          <footer>
            <Tag>
              <FontAwesomeIcon icon={faGithub} />
              <span title={user.login}>{user.login}</span>
            </Tag>

            <Tag>
              <FontAwesomeIcon icon={faBuilding} />
              <span title={user.company}>{user.company}</span>
            </Tag>

            <Tag>
              <FontAwesomeIcon icon={faUserGroup} />
              <span title={followers}>
                {user.followers > 1
                  ? `${user.followers} seguidores`
                  : `${user.followers} seguidor`}
              </span>
            </Tag>
          </footer>
        </Aside>
      </ProfileContainer>
    );
}
