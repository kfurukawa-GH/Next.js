import useSWR from "swr";

type Products = {
  value: [
    {
      product_name: string;
      common_products_code: string;
      brand_name: string;
      applying_date: string;
      maker_name: string;
      pb_nb_classification: string;
    }
  ];
};

async function fetcher(key: string, init?: RequestInit) {
  return fetch(key, init).then((res) => res.json() as Promise<Products | null>);
}

function getProductList() {
  const { data, error, isLoading } = useSWR(
    "http://127.0.0.1:4010/products",
    fetcher
  );

  return {
    data,
    isLoading,
    error,
  };
}

export default getProductList;
