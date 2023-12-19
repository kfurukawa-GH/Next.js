"use client";
import { StaticImageData } from "next/image";
import Card from "@/app/_components/elements/Card/Card";
import imageAsset from "../../../../public/foods/coffee.jpg";
import DescriptionList from "@/app/_components/elements/List/DescriptionList";
import getProductBaseInfo from "@/app/_lib/FoodStandardDocBaseInfo";

type Items = {
  term: string;
  description: string;
};

const FoodBaseInfoCard = ({ id }: { id: string }) => {
  const { data, error } = getProductBaseInfo(id);

  const list: JSX.Element[] = [];
  let items: Items[] = [];
  if (data) {
    items = [
      { term: "正式商品名", description: data.product_name },
      { term: "JICFS分類", description: data.pb_nb_classification },
      { term: "荷姿規格", description: data.brand_name },
      { term: "メーカー名", description: data.maker_name },
      { term: "メーカー商品ID", description: data.common_products_code },
      { term: "発売日", description: data.applying_date },
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
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          基本情報
        </h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">{list}</dl>
      </div>
    </div>
  );
};

export default FoodBaseInfoCard;
