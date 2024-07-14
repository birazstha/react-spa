import { Link } from "react-router-dom";

export default function Products() {
  const PRODUCTS = [
    { id: "p1", title: "Driving School Management System" },
    { id: "p2", title: "Photo Studio Management System" },
  ];

  return (
    <>
      <h1>Our Products</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            {/* <Link to={`/products/${prod.id}`} relative="path"> {prod.title}</Link> */}
            <Link to={prod.id} > {prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
