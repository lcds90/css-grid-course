import styled from 'styled-components';

// SECTION 03 - Auto Flow
/*
  O auto flow determina se o elemento irá se ajuntar com a coluna ou linha do grid.
*/
export const Container = styled.main`
    background-color: ${({ theme: { colors } }) => colors.secondary.dark};
    overflow:auto;

    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 20px;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    align-items:center;
`;

export const Button = styled.button`
    padding: 25px;
    border-radius:5px;
    background-color: ${({ theme: { colors } }) => colors.others.tertiary};
    color:white;
    font-style: italic;
    font-size:1.5rem;
`;

export const Item = styled.div`
    color: ${({ theme: { colors } }) => colors.others.primary};
    background-color: ${({ theme: { colors } }) => colors.others.secondary};
    display: flex;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    height:50vh;
    box-shadow: .5px .5px 2px rgba(0, 0, 0, 0.25);
`;

// !SECTION
