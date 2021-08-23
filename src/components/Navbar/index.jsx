import { useState } from 'react';
import { Navbar, NavItem } from './styles';

export default ({ links }) => {
  const [showNavbar, setshowNavbar] = useState(false);
  return (
    <Navbar
      showNavbar={showNavbar}
      onMouseOver={() => setshowNavbar(true)}
      onMouseOut={() => setshowNavbar(false)}
    >
      {links.map(({ link, title }) => <NavItem showNavbar={showNavbar} to={link}>{title}</NavItem>)}
    </Navbar>
  );
};
