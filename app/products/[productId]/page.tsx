import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const productId = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${productId}`);
    }, 100);
  });
  return {
    title: `Product - ${title}`,
    description: `Mô tả sản phẩm - ${title}`,
    keywords: `sản phẩm, ${title}`,
    openGraph: {
      type: "website",
      title: `Product - ${title}`,
      description: `Mô tả sản phẩm - ${title}`, 
      images: [
        { url: `https://totalfeeling.com/totalfeeling-api/layout/thumbs/sanphamchuluc/${productId}.png`,
          width: 1200,
          height: 630,
          alt: `Product - ${title}`,
       },

      ],
    },
    twitter: {
      title: `Product - ${title}`,
      description: `Mô tả sản phẩm - ${title}`,
      images: [
        { url: `https://totalfeeling.com/totalfeeling-api/layout/thumbs/sanphamchuluc/${productId}.png`,
          width: 1200,
          height: 630,
          alt: `Product - ${title}`,
        },
      ],
    },
    alternates: {
      canonical: `https://totalfeeling.com/products/${productId}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL('https://totalfeeling.com'),
    
  };
};

export default async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;
  return <h1>Details about product {productId}
    <Image src={`https://totalfeeling.com/totalfeeling-api/layout/thumbs/sanphamchuluc/${productId}.png`} alt="Product Image" width={200} height={200} />
  </h1>;
}