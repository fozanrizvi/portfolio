import styled from "styled-components";
import { IconButton } from "@mui/material";

interface Props {
  isCollapsed: boolean;
}

export const Sidebar = styled.div<Props>`
  height: 100vh;
  background-color: transparent;
  position: fixed;
  width: ${(props) => (props.isCollapsed ? "80px" : "auto")};
`;

export const StyledIconButton = styled(IconButton)`
  left: 15px;
`;
