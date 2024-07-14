import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
`;

export default function RootPage() {
  return (
    <>
      <Container>
        <MainNavigation />
        <Outlet />
      </Container>
    </>
  );
}
