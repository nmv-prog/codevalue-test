import styled from "styled-components";

export const ProductFrameContainer = styled.div`
  position: relative;
  border: 2px solid #000; 
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
  max-height: 100vh;
  max-width: 45vw;
  display: flex;
  flex-direction: column;

`;


export const ProductTitle = styled.div`
  position: absolute;
  top: -18px;
  left: 20px;
  background-color: #fff;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: bold;
  z-index: 1; 
`;

export const ProductImage = styled.img`
    width: 100px;
`;

export const ProductNameTitle = styled.p`

`;

export const ProductName = styled.input`
    border: 2px solid #000; 
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
`;


export const ProductDescriptionTitle = styled.p`

`;

export const ProductDescription = styled.textarea`
    border: 2px solid #000; 
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
`;


export const ProductPriceWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;

`;

export const ProductPriceTitle = styled.p`

`;



export const ProductPrice = styled.input`
    border: 2px solid #000; 
  padding: 20px;
  margin: 10px 0;
  max-width: fit-content;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
  font-size: 16px;
  margin-right: 10px;
`;



export const SaveButton = styled.button`
     border: 2px solid #000; 
  padding: 20px;
  margin: 10px 0;
  width: 100px;
  height: 50px;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
   cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled }) => (disabled ? '#ccc' : 'lightgreen')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;