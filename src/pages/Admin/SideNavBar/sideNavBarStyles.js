
import styled from 'styled-components';

// Sidebar Styles
export const SidebarContainer = styled.nav`
  background-color: #222;
  color: #fff;
  padding: 20px;
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SidebarItem = styled.li`
  margin-bottom: 15px;
`;

export const SidebarLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: #f00;
  }
`;