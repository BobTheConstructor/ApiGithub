import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.large}) {
    grid-template-columns: auto;
  }
`;