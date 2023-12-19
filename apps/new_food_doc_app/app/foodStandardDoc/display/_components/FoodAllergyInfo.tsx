"use client";
import getProductAllergyInfo from "@/app/_lib/FoodStandardDocAllergyInfo";

type Items = {
  term: string;
  description: string;
};

const FoodAllergyInfo = ({ id }: { id: string }) => {
  const { data, error } = getProductAllergyInfo(id);

  const list: JSX.Element[] = [];
  let items: Items[] = [];
  if (data) {
    const items = [
      { term: "えび", description: data.shrimp ? "はい" : "いいえ" },
      { term: "かに", description: data.crab ? "はい" : "いいえ" },
      { term: "小麦", description: data.wheat ? "はい" : "いいえ" },
      { term: "そば", description: data.soba ? "はい" : "いいえ" },
      { term: "卵", description: data.egg ? "はい" : "いいえ" },
      { term: "乳成分", description: data.milk_component ? "はい" : "いいえ" },
      { term: "落花生", description: data.peanut ? "はい" : "いいえ" },
      { term: "アーモンド", description: data.almond ? "はい" : "いいえ" },
      { term: "abalone", description: data.abalone ? "はい" : "いいえ" },
      { term: "cuttlefish", description: data.cuttlefish ? "はい" : "いいえ" },
      { term: "いくら", description: data.how_much ? "はい" : "いいえ" },
      { term: "オレンジ", description: data.orange ? "はい" : "いいえ" },
      { term: "ｶｼｭｰﾅｯﾂ", description: data.cashews ? "はい" : "いいえ" },
      { term: "ｷｳｲﾌﾙｰﾂ", description: data.kiwifruit ? "はい" : "いいえ" },
      { term: "牛肉", description: data.beef ? "はい" : "いいえ" },
      { term: "くるみ", description: data.walnut ? "はい" : "いいえ" },
      { term: "ごま", description: data.sesame ? "はい" : "いいえ" },
      { term: "salmon", description: data.salmon ? "はい" : "いいえ" },
      { term: "さば", description: data.mackerel ? "はい" : "いいえ" },
      { term: "大豆", description: data.soybean ? "はい" : "いいえ" },
      { term: "鶏肉", description: data.chicken ? "はい" : "いいえ" },
      { term: "バナナ", description: data.banana ? "はい" : "いいえ" },
      { term: "豚肉", description: data.pork ? "はい" : "いいえ" },
      {
        term: "matsutake_mushroom",
        description: data.matsutake_mushroom ? "はい" : "いいえ",
      },
      { term: "もも", description: data.peach ? "はい" : "いいえ" },
      {
        term: "Japanese_yam",
        description: data.japanese_yam ? "はい" : "いいえ",
      },
      { term: "りんご", description: data.apple ? "はい" : "いいえ" },
      { term: "ゼラチン", description: data.gelatin ? "はい" : "いいえ" },
      { term: "魚介類", description: data.seafood ? "はい" : "いいえ" },
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

export default FoodAllergyInfo;
