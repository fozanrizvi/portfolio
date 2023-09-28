import { useState } from "react";

//components
import { Menu, MenuItem } from "react-pro-sidebar";
import { Sidebar, StyledIconButton } from "./Navbar.styled";
import { LeftAlignedDiv } from "../shared/Shared.styled";

//material icons
import MenuIcon from "@mui/icons-material/Menu";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import GitHubIcon from "@mui/icons-material/GitHub";
import RingVolumeIcon from "@mui/icons-material/RingVolume";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <Sidebar isCollapsed={isCollapsed}>
        <LeftAlignedDiv>
          <StyledIconButton onClick={handleCollapse}>
            <MenuIcon />
          </StyledIconButton>
        </LeftAlignedDiv>
        <Menu>
          <MenuItem icon={<ContactsOutlinedIcon />} href="#aboutMe">
            About me
          </MenuItem>
          <MenuItem icon={<LibraryBooksIcon />} href="#shelf">
            Shelf
          </MenuItem>
          <MenuItem icon={<GitHubIcon />} href="#github">
            Github
          </MenuItem>
          <MenuItem icon={<RingVolumeIcon />} href="contactMe">
            Contact Me
          </MenuItem>
          <MenuItem icon={<SportsBasketballIcon />} href="hobbies">
            Hobbies
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default Navbar;
