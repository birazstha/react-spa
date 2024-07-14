import { Link, useNavigate } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function Home() {
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("/products");
  }
  return (
    <>
      <h1>Welcome to Home.</h1>
      <button onClick={navigateHandler}>Products</button>
    </>
  );
}
