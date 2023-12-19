import { StaticImageData } from "next/image";
import Card from "@/app/_components/elements/Card/Card";
import imageAsset from "../../../../public/foods/coffee.jpg";

type ListItme = {
  term: string;
  description: string;
};

const FoodBaseInfoCard = () => {
  const imagePath: StaticImageData = imageAsset;

  const listItems: ListItme[] = [
    { term: "正式商品名", description: "コーヒー" },
    { term: "JICFS分類", description: "コーヒー" },
    { term: "荷姿規格", description: "10kg/25kgファイバードラム" },
  ];

  const listItems2: ListItme[] = [
    { term: "メーカー名", description: "株式会社古川" },
    { term: "メーカー商品ID", description: "001" },
    { term: "発売日", description: "2023/12/03" },
  ];

  return (
    <>
      <Card imageAsset={imagePath} items={listItems} items2={listItems2} />
    </>
  );
};

export default FoodBaseInfoCard;
