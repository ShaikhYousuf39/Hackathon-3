import { client } from "@/sanity/lib/client";

interface Product {
    _id: string;
    image_url: string;
    title: string;
    description: string;
    price: number;
    priceWithoutDiscount: number;
    inventory: number;
    tags: string[];
}

const adminData = async (): Promise<Product[]> => {
    try {
        const products = await client.fetch(`
      *[_type=="products"]{
  _id,
  title,
  inventory,
  price,
  priceWithoutDiscount,
  "image_url": image.asset->url,
  tags
}
    `);
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};
export default adminData;