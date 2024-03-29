// adminDashboardStyles.js
import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  height: 100vh; /* Set container height to 100% viewport height */
`;

export const SideNavBar = styled.div`
  width: 200px; /* Set desired width for the navbar */
  background-color: #f0f0f0; /* Optional background color */
  padding: 1rem; /* Optional padding for content */
  display: flex;
  flex-direction: column; /* Stack navbar items vertically */
  height: 100%; /* Set navbar height to 100% of container height */
`;
export const NavBarList = styled.ul`
  list-style: none; /* Remove default bullet points */
  padding: 0; /* Remove default padding */
  margin: 0; /* Remove default margin */
`;

export const NavItem = styled.li`
  margin-bottom: 0.5rem; /* Add some spacing between items */
`;

export const NavLink = styled.a`
  text-decoration: none; /* Remove underline from links */
  color: black; /* Set link color */
  padding: 0.5rem 1rem; /* Add padding for clickable area */
  display: block; /* Make links take full width of the container */

  &:hover {
    background-color: #e0e0e0; /* Add hover effect */
    cursor: pointer; /* Indicate clickable behavior */
  }
`;

export const DashboardContent = styled.div`
  flex: 1; /* Take up remaining space after SideNavBar */
  padding: 1rem; /* Add padding for content */
`;

export const DashboardTitle = styled.h1`
  margin-bottom: 0.5rem;
`;

export const DashboardSubtitle = styled.p`
  color: #888; /* Optional subtitle color */
`;
