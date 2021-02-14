import styled from "styled-components";

export const Section = styled.div`
  border-radius: 10px;
  padding: 15px;
  width: 500px;
  margin: auto;
  box-shadow: 5px 5px 10px black;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #bbb;
  transition: all 0.3s linear;
  background: #F3AAAA; /* Old browsers */
    background: -moz-linear-gradient(top, #F3AAAA 0%, #febf04 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#F3AAAA), color-stop(100%,#febf04)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top, #F3AAAA 0%,#febf04 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top, #F3AAAA 0%,#febf04 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top, #F3AAAA 0%,#febf04 100%); /* IE10+ */
    background: linear-gradient(top, #F3AAAA 0%,#febf04 100%); /* W3C */
  &:hover {
    -webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    -moz-box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    -o-box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
   
  }
`;

export const Container = styled.div`
    text-align: center;
    padding: 8px;
`;

export const PokemonProfile = styled.img`
    width: 300px; 
    height: 300px;
`;


export const Label = styled.label`
    top: 0;
    left: 0;
    position: absolute;
    transform: translate(0, 24px) scale(1);
`;

