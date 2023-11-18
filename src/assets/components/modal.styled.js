import styled from "styled-components";

export const SmodalWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4);
    position: absolute;
    top: 0;
    left: 0;
`;

export const SModal = styled.div`
  border: solid 1px black;
  background-color: white;
  padding: 12px;
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export const SModalHeader = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 12px;
border-bottom: 1px solid black;

button {
    width: 40px;
    height: 40px;
    font-size: 25px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

`