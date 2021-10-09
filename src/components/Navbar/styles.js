import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
    ${({ showNavbar }) => (showNavbar ? `
    height:50vh;
    padding: 25px;
    `
    : `
    height: 5vh;
    padding: 0;
    `)};

    
    display:grid;
    transition: height 1.25s ease, padding 1.25s ease;
    position:sticky;
    top:0;
    align-items:center;
    grid-auto-columns: 1fr;
    background: black;
    overflow-y:scroll;
    max-width:100%;
    gap:20px;
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
    display:grid;
    place-items:center;
`;
