import styled from 'styled-components';

// SECTION 04 - Sizing Tracks
/*
  Não utilize a definição do grid com %,
  Porque a porcentagem é relacionado ao algo que tenha como pai algo pré-definido
  Ex: container pai como width: 100vw, no node filho pode-se usar 50% (50vw)
  Opte pelas medidas de frações, pois elas realizam o calculo automatico para nós (https://www.youtube.com/watch?v=Dp7kOWhAjuo)
  A definição do grid-auto-rows por padrão é 1fr ao declarar o display: grid
  */
export const Container = styled.main`
    background-color: ${({ theme: { colors } }) => colors.secondary.dark};
    max-width:100%;
    height:100%;
    overflow:auto;

    display:grid;
    grid-template-columns: 2fr 1fr 1fr;
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
