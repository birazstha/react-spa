import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UL = styled.ul`
  list-style: none;
  display: flex;
`;

const List = styled.li`
  margin-right: 2rem;
  text-decoration: none;
`;

const Menu = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    text-decoration: underline;
  }
  &:hover {
    color: lightgray;
  }
`;

const Logo = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 30px;
  font-weight: bolder;
`;

export default function MainNavigation() {
  return (
    <>
      <Nav>
        <Logo to="/">BIRAJ SHRESTHA</Logo>
        <UL>
          <List>
            <Menu to="">Home</Menu>
          </List>

          <List>
            <Menu to="products">Products</Menu>
          </List>
          <List>
            <Menu to="galleries">Gallery</Menu>
          </List>
        </UL>
      </Nav>
    </>
  );
}
