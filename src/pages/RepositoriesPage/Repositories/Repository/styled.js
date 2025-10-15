import styled from "styled-components";

export const Container = styled.div`]
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  background: rgba(0, 0, 0, 0.25);
  border-left: 3px solid ${(props) => props.color || props.theme.colors.gray500};
  padding: 1rem 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.medium}) {
    width: 90%;
  }
`;

export const Name = styled.h3`
  font-size: ${(props) => props.theme.fontSize.lg}
  font-weight: normal;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: 1.5rem;
  margin: 1rem 0;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.color || props.theme.colors.gray500};
  font-size: ${(props) => props.theme.fontSize.sm};
`;

export const Lang = styled.span`
  color: inherit;
`;

export const Link = styled.a`
  color: inherit;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
`;