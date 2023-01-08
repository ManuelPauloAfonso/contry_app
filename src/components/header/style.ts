import styled from 'styled-components'

export const Container = styled.header`

  display: flex;
  justify-content: space-between;
  padding:  1rem 2rem;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  button {
    border: none;
    display: flex;
    align-items: center;
    gap: 0.500rem;
    background-color: white;
    a{
      font-weight: 500;
      display: flex;
      align-items: center;
    }
  }

`