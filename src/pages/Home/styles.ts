import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  margin: 134px 425px 50px 425px;
  gap: 56px;

  @media (max-width: 1116px) {
    margin: 134px 300px 50px 300px;
  }

  @media (max-width: 844px) {
    margin: 134px 150px 50px 150px;
  }

  @media (max-width: 553px) {
    margin: 134px 75px 50px 75px;
  }
`