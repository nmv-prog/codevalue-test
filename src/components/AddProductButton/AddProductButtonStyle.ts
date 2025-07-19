import styled from "styled-components";

export const AddButton = styled.button`
     border: 2px solid #000; 
  padding: 20px;
  margin-right: 25px;
  width: 100px;
  height: 30px;
  font-size: 18px;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
 cursor: pointer;
 background-color: lightgreen;

   &:hover {
    background-color: green;  
    transform: scale(1.05);  
  }
`;