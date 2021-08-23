import styled from 'styled-components';

// SECTION 02 - Implicit Grid vs Explicit Grid
/*
    O modo explicita significa quando há declaração EXATAMENTE do que elas precisam ser
    Ex: grid-template-columns: 200px 400px;

    A implicidade acontece quando o navegador precisa alocar 4 itens com somente duas colunas
    Então a implicidade ocorre no momento da criação da segunda linha
    (grid-row) para encaixar os elementos

    E a implicidade pode ser utilizada com auto-rows/columns
*/
export const Container = styled.main`
    display:grid;
    grid-template-columns: 1fr 100px;
    grid-template-rows: 20px 100px;
    grid-auto-rows: 250px;
    grid-gap: 100px;
    background-color: black;
`;

export const Item = styled.div`
    padding: 25px;
    color: ${({ theme: { colors } }) => colors.primary.dark};
    background-color: ${({ theme: { colors } }) => colors.secondary.light};
    display: flex;
    justify-content:center;
    align-items:center;
    border:5px inset white;
    box-shadow: 2px 10px 15px rgba(255, 255, 255, 0.15);
`;

export const Button = styled.button`
    padding: 2px;
    border-radius:5px;
    background-color: ${({ theme: { colors } }) => colors.others.tertiary};
    color:white;
    font-style: italic;
    font-size:1.5rem;
`;

// !SECTION
