import styled from "styled-components";
import { IconButton } from "@mui/material";

interface Props {
  isCollapsed: boolean;
}

export const Sidebar = styled.div<Props>`
  height: 100vh;
  background-color: transparent;
  color: #c26b3f;
  position: fixed;
  width: ${(props) => (props.isCollapsed ? "80px" : "auto")};
  .ps-menu-root {
    display: none;
  }

  &:hover .ps-menu-root {
    display: block;
  }
`;

export const StyledIconButton = styled(IconButton)`
  left: 15px;
`;
