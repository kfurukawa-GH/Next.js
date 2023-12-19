import useSWR from "swr";

type ProductsAllergyInfo = {
  shrimp: boolean;
  crab: boolean;
  wheat: boolean;
  soba: boolean;
  egg: boolean;
  milk_component: boolean;
  peanut: boolean;
  almond: boolean;
  abalone: boolean;
  cuttlefish: boolean;
  how_much: boolean;
  orange: boolean;
  cashews: boolean;
  kiwifruit: boolean;
  beef: boolean;
  walnut: boolean;
  sesame: boolean;
  salmon: boolean;
  mackerel: boolean;
  soybean: boolean;
  chicken: boolean;
  banana: boolean;
  pork: boolean;
  matsutake_mushroom: boolean;
  peach: boolean;
  japanese_yam: boolean;
  apple: boolean;
  gelatin: boolean;
  seafood: boolean;
};

async function fetcher(params: any) {
  return await fetch(params[0], {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Prefer: `example=sample${params[1]}`,
    },
  }).then((res) => res.json() as Promise<ProductsAllergyInfo | null>);
}

function getProductAllergyInfo(id: string) {
  const { data, error, isLoading } = useSWR(
    [`http://127.0.0.1:4010/products/${id}/allergy`, id],
    ([url, id]) => fetcher([url, id])
  );

  return {
    data,
    isLoading,
    error,
  };
}

export default getProductAllergyInfo;
