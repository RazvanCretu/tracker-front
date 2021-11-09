import styled from "styled-components";

import { Link } from "react-router-dom";

import { useAuth } from "../../context/auth";

const Header = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #77002e;
  padding: 0 10%;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: baseline;
  }

  li {
    margin-left: 3rem;
  }

  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: #fcb8d2;
  }

  a:hover,
  a:active,
  a.active {
    color: white;
  }

  .badge {
    background-color: #cc2062;
    color: white;
    border-radius: 12px;
    padding: 0 1rem;
    margin-left: 0.5rem;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  color: white;
  font-weight: bold;
`;

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  color: #77002e;
  border: 1px solid #77002e;
  background-color: ${(props) => (props.authed ? "transparent" : "red")};
  padding: 0.5rem 1.5rem;
  border-radius: 4px;

  :hover {
    background-color: #ffe2ed;
  }
`;

function Navigation() {
  const { isAuthenticated, logout, login } = useAuth();

  return (
    <Header>
      <Logo>Project Tracker</Logo>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
          <li>
            {isAuthenticated ? (
              <Button onClick={logout} authed={isAuthenticated}>
                Log Out
              </Button>
            ) : (
              <Button onClick={login} authed={isAuthenticated}>
                Log In
              </Button>
            )}
          </li>
        </ul>
      </nav>
    </Header>
  );
}

export default Navigation;
