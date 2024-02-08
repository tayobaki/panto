import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function getProducts() {
  return client.fetch(
    groq`*[_type == "product"]{
        _id,
        name,
        description,
        price,
        category,
        "image": image.asset->url,
        "slug": slug.current
      }`
  );
}

export async function getSingleProducts(slug) {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        name,
        description,
        price,
        category,
        "image": image.asset->url,
        "slug": slug.current
      }`,
    { slug }
  );
}
