import styled from "styled-components";

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Container = styled.main`
    display: flex;
    min-height: 100vh;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.medium}) {
        flex-direction: column;
    }
`;

export const Sidebar = styled.aside`
    background: ${(props) => props.theme.colors.gray800};
    min-width: 20rem;
    max-height: 100vh;
    over-flow-y: auto;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.large}) {
        max-height: none;
    }
`; 

export const Main = styled.section`
    background: ${(props) => props.theme.colors.gray700};
    width: 100%;
    height: 92.5vh;
    padding: 35px;
    over-flow-y: hidden;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.large}) {
        height: 100%;
        padding: 5px 20px;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints.medium}) {
        height: 100%;
        padding: 0px 20px;
    }
`;