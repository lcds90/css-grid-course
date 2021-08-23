import styled from 'styled-components';

// SECTION 06 - Sizing Grid Items
/*

*/
export const Container = styled.main`
    background-color: ${({ theme: { colors } }) => colors.others.tertiary};
    height:100vh;
    max-height: 100vh;
    overflow:auto;

    display:grid;
    grid-template-columns: 1fr repeat(3, 1fr auto) 200px;
    grid-template-rows: 1fr 1fr;
    grid-gap: 20px;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    align-items:center;
`;

export const Button = styled.button`
    padding: 25px;
    border-radius:5px;
    background-color: ${({ theme: { colors } }) => colors.others.primary};
    color:white;
    font-style: italic;
    font-size:1.5rem;
`;

export const Item = styled.div`
    color: ${({ theme: { colors } }) => colors.primary.light};
    background-color: ${({ theme: { colors } }) => colors.primary.dark};
    display: flex;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    height:50vh;
    box-shadow: .5px .5px 2px rgba(0, 0, 0, 0.25);
`;

// !SECTION
