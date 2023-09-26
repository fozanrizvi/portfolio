import styled from 'styled-components';

interface Props{
    isCollapsed: boolean;
}

export const Sidebar = styled.div<Props>`
    height: 100vh;
    background-color: lightgrey;
    position: fixed;
    width: ${props => props.isCollapsed ? '80px' : 'auto'};
`;
