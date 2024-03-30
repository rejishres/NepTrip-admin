import styled from 'styled-components';

export const DestinationFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const DestinationLabel = styled.label`
  margin-bottom: 5px;
`;

export const DestinationInput = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const DestinationTextArea = styled.textarea`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const DestinationSelect = styled.select`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const DestinationButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const DestinationList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const DestinationListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const DestinationListName = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

export const DestinationListImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const SidebarContainer = styled.div`
  /* Add sidebar container styles */
`;

export const SidebarMenu = styled.ul`
  /* Add sidebar menu styles */
`;

export const SidebarLink = styled.a`
  /* Add sidebar link styles */
`;
