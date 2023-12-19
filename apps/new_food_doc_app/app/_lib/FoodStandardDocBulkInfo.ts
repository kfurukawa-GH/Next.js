import useSWR from "swr";

type ProductsBulkInfo = {
  name: string;
  raw_materials_name: string;
  net: string;
  solid_quantity: string;
  content_total: string;
  save_method: string;
  origin_country: string;
  material_place_of_origin_name: string;
  attention_on_using: string;
  cooking_method: string;
  how_to_use: string;
  sterilization_method: string;
  freezing_heating_presence_previous: string;
  heating_cooking_necessity: string;
  starch_content_rate: string;
  fat_free_milk_solid_minutes: string;
  milk_fat_minutes: string;
  time_limit: string;
  other_display: string;
};

async function fetcher(params: any) {
  return await fetch(params[0], {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Prefer: `example=sample${params[1]}`,
    },
  }).then((res) => res.json() as Promise<ProductsBulkInfo | null>);
}

function getProductBulkInfo(id: string) {
  const { data, error, isLoading } = useSWR(
    [`http://127.0.0.1:4010/products/${id}/bulk_display`, id],
    ([url, id]) => fetcher([url, id])
  );

  return {
    data,
    isLoading,
    error,
  };
}

export default getProductBulkInfo;
