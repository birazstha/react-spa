import { Link, useParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();

  return (
    <>
      <h1>Product Detail Page</h1>
      {params.productId}
      <br />

      <Link to=".." relative="path">Back</Link>
    </>
  );
}
