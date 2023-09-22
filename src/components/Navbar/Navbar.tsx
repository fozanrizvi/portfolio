import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

//Material icons
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GitHubIcon from '@mui/icons-material/GitHub';
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

const Navbar = () => {
  return (
    <>
    <Sidebar>
      <Menu>
        <MenuItem icon={<ContactsOutlinedIcon />} href='/'>About me</MenuItem>
        <MenuItem icon={<LibraryBooksIcon />} href='/'>Shelf</MenuItem>
        <MenuItem icon={<GitHubIcon />} href='/'>Github</MenuItem>
        <MenuItem icon={<RingVolumeIcon />} href='/'>Contact Me</MenuItem>
        <MenuItem icon={<SportsBasketballIcon />} href='/'>Hobbies</MenuItem>
      </Menu>
    </Sidebar>
      {/* {navigationLinks.map((item: any)=>{
              <Link href={item.href}>{item.name}</Link>
            })} */}

      { /* Homepage */ }
  { /* About me */ }
  { /* Shelf/projects/links/writings */ }

  { /* Github */ }
  { /* LinkedIn */ }
  { /* instagram */ }

  { /* Contact me */ }
  { /* Hobbies/skydiving/reading/trails */ }
  </>
)};

export default Navbar;