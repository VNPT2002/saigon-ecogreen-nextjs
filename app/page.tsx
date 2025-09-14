import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <div>
        <h2>Ecommerce website</h2>
        <div className="flex gap-4">
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
        </div>
        <Button>Click me</Button>
      </div>
    </Container>
  );
}
