import Table from "@/app/_components/elements/Table/Table";
import { TableHeaderProps } from "@/app/_types/props";
import { TableBodyProps } from "@/app/_types/props";

const FoodBaseInfoView = () => {
  const headerItems: TableHeaderProps[] = [
    { value: "商品名" },
    { value: "共通商品コード" },
    { value: "ブランド名" },
    { value: "適用日" },
    { value: "メーカー名" },
    { value: "PB／NB分類" },
  ];

  const bodyItems: TableBodyProps[] = [
    { value: "商品名" },
    { value: "共通商品コード" },
    { value: "ブランド名" },
    { value: "適用日" },
    { value: "メーカー名" },
    { value: "PB／NB分類" },
  ];

  return <Table headers={headerItems} bodies={bodyItems} />;
};

export default FoodBaseInfoView;
