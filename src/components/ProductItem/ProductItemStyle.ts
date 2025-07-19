import styled from "styled-components";

export const ProductFrameContainer = styled.div`
  border: 2px solid #000; 
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
  max-height: 100vh;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const ProductImage = styled.img`
    height: 75px;
    margin-right: 10px;
`;

export const ProductName = styled.p`
    font-weight: bold;
`;

export const ProductDescription = styled.p`
`;

export const DeleteButton = styled.button`
     border: 2px solid #000; 
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: orange;
  height: 30px;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
  cursor: pointer;

  &:hover {
    background-color: #FF8C00;  
    transform: scale(1.05);  
  }

`;

export const ImageAndNameWrapper = styled.div`
display: flex;
`;