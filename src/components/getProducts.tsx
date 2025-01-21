import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  image_url: string;
  title: string;
  description: string;
  price: number;
  inventory: number;
}

const getProducts = async (): Promise<Product[]> => {
  try {
    const products = await client.fetch(`
      *[_type=="products"][0..14]{
        _id,
        "image_url": image.asset->url,
        title,
        description,
        price,
        inventory
      }
    `);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; 
  }
};
export default getProducts;