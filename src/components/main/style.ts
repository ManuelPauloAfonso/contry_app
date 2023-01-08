import styled from "styled-components";

export const Container = styled.main`

display: grid;
grid-template-columns: 18rem 18rem 18rem 18rem;
gap: 3rem;
justify-content: center;
margin-top: 10rem;

  
  img{
    width: 15rem;
    height: 8rem;
  }
  .div{
    background-color: #FFF;
    height: 20rem;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    padding-top: 3rem;

   

    .p{
      font-weight: 700;
      margin-top: 0.500rem;

    }
    .text{
      margin-top: 1rem;
    }
  }
 
`