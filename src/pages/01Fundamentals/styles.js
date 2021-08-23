import styled from 'styled-components';

// SECTION 01 - Fundamentos
/*
display: grid
Todos nodes filhos de um elemento com
display:grid, sempre irão ser items de grid explicitamente

A declaração direta é chamada de implicit grid

utilizando auto ele se auto ajusta com espaço disponível

Os números do grid não significa a coluna em si, mas sim o começo e aonde termina
*/
export const Container = styled.main`
    display:grid;
    grid-template-columns: 100px auto 100px 100px;
    grid-gap: 20px;
    background-color: ${({ theme: { colors } }) => colors.background};
    grid-template-rows:1fr 1fr;
`;

export const Item = styled.div`
    padding: 25px;
    color: ${({ theme: { colors } }) => colors.primary.light};
    background-color: ${({ theme: { colors } }) => colors.primary.dark};
    display: flex;
    justify-content:center;
    align-items:center;
`;

// !SECTION
