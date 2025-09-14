import Link from "next/link";

export default function ProductList() {
  const productId = 100;

  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h2>
        <Link href="products/17506614662491">Product 1</Link>
      </h2>
      <h2>
        <Link href="products/17506619134681">Product 2</Link>
      </h2>
      <h2>
        <Link href="products/17506625866591" replace>
          Product 3
        </Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  );
}