import Navigation from "./Navigation";

import styled from "styled-components";

const Main = styled.main`
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
`;

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <Main>{children}</Main>
    </div>
  );
}

export default Layout;
