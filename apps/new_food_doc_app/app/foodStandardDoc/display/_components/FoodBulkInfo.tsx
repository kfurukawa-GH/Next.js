"use client";
import getProductBulkInfo from "@/app/_lib/FoodStandardDocBulkInfo";

type Items = {
  term: string;
  description: string;
};

const FoodBulkInfo = ({ id }: { id: string }) => {
  const { data, error } = getProductBulkInfo(id);

  const list: JSX.Element[] = [];
  let items: Items[] = [];
  if (data) {
    const items = [
      { term: "名称", description: data.name },
      { term: "原材料名", description: data.raw_materials_name },
      { term: "内容量", description: data.net },
      { term: "固形量", description: data.solid_quantity },
      { term: "内容総量", description: data.content_total },
      { term: "保存方法", description: data.save_method },
      { term: "原産国", description: data.origin_country },
      { term: "原料原産地名", description: data.material_place_of_origin_name },
      { term: "使用上の注意", description: data.attention_on_using },
      { term: "調理方法", description: data.cooking_method },
      { term: "使用方法", description: data.how_to_use },
      { term: "殺菌方法", description: data.sterilization_method },
      {
        term: "凍結前加熱の有無",
        description: data.freezing_heating_presence_previous,
      },
      { term: "加熱調理の必要性", description: data.heating_cooking_necessity },
      { term: "でん粉含有率", description: data.starch_content_rate },
      {
        term: "Fat-free乳固形分",
        description: data.fat_free_milk_solid_minutes,
      },
      { term: "乳脂肪分", description: data.milk_fat_minutes },
      { term: "期限", description: data.time_limit },
      { term: "その他表示", description: data.other_display },
    ];

    items.forEach((item) => {
      list.push(
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            {item.term}
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {item.description}
          </dd>
        </div>
      );
    });
  }

  return (
    <div className="bg-white rounded-lg m-3 p-4">
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">{list}</dl>
      </div>
    </div>
  );
};

export default FoodBulkInfo;
