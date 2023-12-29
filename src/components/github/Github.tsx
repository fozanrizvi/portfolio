import { useEffect, useState } from "react";

import SourceIcon from "@mui/icons-material/Source";

//components
import { Section } from "../shared/Section.styled";
import { Banner } from "../shared/Banner.styled";
import { Gitpro, Image, Repos } from "./Github.styled";
import { Link } from "../shared/Link.styled";

//images
import github from "../../assets/images/banners/github.svg";

//axios
import axios from "axios";

//describe interface below:
// interface State {
//   userInfo: string,
//   repos: string
// }

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
        </div>
        <div>
          <a
            href="https://github.com/fozanrizvi"
            target="_blank"
            rel="noreferrer"
          >
            <Banner src={github} />
          </a>
        </div>
        <Repos>
          {repos.map((repo: any) => (
            <div>
              <Link href={repo.html_url} target="_blank">
                {repo.name}
              </Link>
            </div>
          ))}
        </Repos>
      </Gitpro>
    </Section>
  );
};

export default Github;
