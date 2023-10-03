import { useEffect, useState } from "react";

import SourceIcon from "@mui/icons-material/Source";

//components
import { Section } from "../shared/Section.styled";
import { Gitpro, Image, Repos } from "./Github.styled";

//axios
import axios from "axios";

const Github = () => {
  const [userInfo, setUserInfo] = useState<any>({});
  const [repos, setRepos] = useState<any>([]);

  useEffect(() => {
    //using async await to call userInfo and repos
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

    const getRepos = async () => {
      try {
        const { data } = await axios.get(
          "https://api.github.com/users/fozanrizvi/repos"
        );
        setRepos(data);
      } catch (e) {
        console.log(e);
      }
    };
    getRepos();
  }, []);

  console.log({ repos });

  return (
    <Section id="github">
      <h1>Github</h1>
      <Gitpro>
        <div>
          <Image src={userInfo?.avatar_url} />
          {/* <Image src={userInfo?.avatar_url} /> */}
        </div>
        <div>
          <div>{userInfo?.name}</div>
          <div>{userInfo?.bio}</div>
        </div>
        <Repos>
          {repos.map((repo: any) => (
            <div>
              <a href={repo.html_url} target="_blank">
                <a>
                  <SourceIcon />
                  {repo.name}
                </a>
              </a>
            </div>
          ))}
        </Repos>
      </Gitpro>
    </Section>
  );
};

export default Github;
