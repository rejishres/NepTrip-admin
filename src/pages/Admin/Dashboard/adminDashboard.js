// AdminDashboard.js
import React from 'react';
import {
  DashboardContainer,
  DashboardContent,
  DashboardTitle,
  DashboardSubtitle,
  SideNavBar,
  NavBarList,
  NavItem,
  NavLink,
} from './adminDashboardStyles';

const AdminDashboard = () => {
  return (
    <DashboardContainer>
      <SideNavBar>
        <NavBarList>
          <NavItem>
            <NavLink href="/dashboard">Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/destination">Destination</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/category">Category</NavLink>
          </NavItem>
        </NavBarList>
      </SideNavBar>
      <DashboardContent>
        <DashboardTitle>Welcome to Admin Dashboard</DashboardTitle>
        <DashboardSubtitle>Manage your destinations and categories here.</DashboardSubtitle>
      </DashboardContent>
    </DashboardContainer>
  );
};

export default AdminDashboard;
