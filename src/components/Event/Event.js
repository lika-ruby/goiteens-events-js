import styled from "styled-components";


export const Item = styled.li`
  padding: 32px;
  border: 3px solid #ccc;
  border-radius: 32px;
  background-color:rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #444;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #555;
  font-size: 14px;
`;

export const Desc = styled.span`
  color: #333;
`;