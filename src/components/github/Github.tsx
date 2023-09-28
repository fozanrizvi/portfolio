import React, { useEffect, useState } from "react";
import { Section } from "../shared/Section.styled";
import axios from "axios";

const Github = () => {
  const [userInfo, setUserInfo] = useState<any>({});
  const [repos, setRepos] = useState<any>([]);

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await axios.get(
          "https://api.github.com/users/fozanrizvi"
        );
        setUserInfo(data);
      } catch (e) {
        console.log(e);
      }
    };
    init();

    axios
      .get("https://api.github.com/users/fozanrizvi/repos")
      .then(({ data }) => {
        setRepos(data);
      })
      .catch((e) => console.log(e));
  }, []);

  console.log({ repos });

  return (
    <Section>
      <h1>Github</h1>
      <div>
        <div>
          <img src={userInfo?.avatar_url} />
        </div>
        <div>
          <div>{userInfo?.login}</div>
          <div>{userInfo?.bio}</div>
        </div>
        <div>
          {repos.map((repo: any) => (
            <div>
              <a href={repo.html_url} target="_blank">
                {repo.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Github;
