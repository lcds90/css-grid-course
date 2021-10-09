import styled, { css } from 'styled-components';

// SECTION 06 - Sizing Grid Items
/*
    Não podemos definir o width explicito no grid item
    pois todos os itens são afetados pela explicidade
    Para alterar a quantidade de colunas ocupadas, utilizados a propriedade span
    coluna: grid-column / linha: grid-row
*/
export const Container = styled.main`
    background-color: ${({ theme: { colors } }) => colors.others.tertiary};
    max-width:100%;
    height:100%;
    overflow:auto;
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
    align-items:center;
`;

// LINK https://medium.com/@justiceotuya/how-to-add-classnames-to-styled-components-f1f88518ab51
export const Item = styled.div`
    ${({ className }) => className === 'item6' && css`
       grid-column: span 3;
       grid-row: span 2;
       height:100%;
    `}

    color: ${({ theme: { colors } }) => colors.primary.light};
    background-color: ${({ theme: { colors } }) => colors.primary.dark};
    display: flex;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    box-shadow: .5px .5px 2px rgba(0, 0, 0, 0.25);
    
`;
// !SECTION
