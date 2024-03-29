import React from 'react';
import { SidebarContainer, SidebarList, SidebarItem, SidebarLink } from './sideNavBarStyles';

const SideNavBar = () => {
  return (
    <SidebarContainer>
      <SidebarList>
        <SidebarItem>
          <SidebarLink href="/dashboard">Dashboard</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink href="/destination">Destination</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink href="/category">Category</SidebarLink>
        </SidebarItem>
      </SidebarList>
    </SidebarContainer>
  );
};

export default SideNavBar;
