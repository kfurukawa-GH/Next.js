import useSWR from "swr";

type ProductsBaseInfo = {
  product_name: string;
  common_products_code: string;
  brand_name: string;
  applying_date: string;
  maker_name: string;
  pb_nb_classification: string;
};

async function fetcher(params: any) {
  return await fetch(params[0], {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Prefer: `example=sample${params[1]}`,
      // Prefer: `example=sample1`,
    },
  }).then((res) => res.json() as Promise<ProductsBaseInfo | null>);
}

function getProductBaseInfo(id: string) {
  const { data, error, isLoading } = useSWR(
    [`http://127.0.0.1:4010/products/${id}/base`, id],
    ([url, id]) => fetcher([url, id])
  );

  return {
    data,
    isLoading,
    error,
  };
}

export default getProductBaseInfo;
