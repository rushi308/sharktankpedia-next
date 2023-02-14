import HomePage from "@/components/Home/HomePage";
import { loaderRef } from "@/components/Spinner";
import { getProducts } from "@/utils/api/client";
import { Product } from "@/schema";

type HomeProps = {
  featuredProducts:Product[],
  recentProducts:Product[]
}

export default function Home({featuredProducts,recentProducts}:HomeProps) {
  return (
    <>
        <HomePage featuredProducts={featuredProducts} recentProducts={recentProducts} />
    </>
  );
}
export async function getServerSideProps({req,res}:any) {
  // Call an external API endpoint to get products
  try{
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59'
    )
    const featuredProducts = await getProducts(NaN, true);
    const recentProducts = await getProducts(1000, false);
    return {
      props: {
        featuredProducts: featuredProducts.products,
        recentProducts: recentProducts.products
      },
    };
  } catch (e) {
    console.log(e)
    throw new Error("Error while fetching graphql product data");
  }
  
}