import useSWR from "swr";

type ProductsBaseInfo = {
  product_name: string;
  common_products_code: string;
  brand_name: string;
  applying_date: string;
  maker_name: string;
  pb_nb_classification: string;
};

async function fetcher(key: string, init?: RequestInit) {
  return fetch(key, init).then(
    (res) => res.json() as Promise<ProductsBaseInfo | null>
  );
}

function getProductBaseInfo(id: string) {
  const { data, error, isLoading } = useSWR(
    `http://127.0.0.1:4010/products/${id}/base`,
    fetcher
  );

  return {
    data,
    isLoading,
    error,
  };
}

export default getProductBaseInfo;
