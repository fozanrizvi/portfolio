import { useEffect, useState } from "react";
import { Section } from "../shared/Section.styled";
import axios from "axios";

const Github = () => {
  const [userInfo, setUserInfo] = useState<any>({});
  const [repos, setRepos] = useState<any>([]);

  useEffect(() => {
    //using async await
    const init = async () => {
      try {
        //fetching user from github api
        const { data } = await axios.get(
          "https://api.github.com/users/fozanrizvi"
        );
        setUserInfo(data);
      } catch (e) {
        console.log(e);
      }
    };
    init();

    //using promise
    axios //fetching repos from github api
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
