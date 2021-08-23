import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
    ${({ showNavbar }) => (showNavbar ? `
    height:30vh;
    `
    : `
    height: 1vh;
    `)};

    
    display:grid;
    transition: height 1.25s ease;
    position:sticky;
    top:0;
    align-items:center;
    grid-auto-flow:column;
    gap:25px;
`;

export const NavItem = styled(Link)`
    ${({ showNavbar }) => (showNavbar ? `
    opacity:1;
    `
    : `
    opacity:0;
    `)};
    transition: opacity 0.75s linear;
    padding: 5px;
    background-color: grey;
    color:white;
    border-radius:10px;
    font-style:none;
    text-align:center;
`;
