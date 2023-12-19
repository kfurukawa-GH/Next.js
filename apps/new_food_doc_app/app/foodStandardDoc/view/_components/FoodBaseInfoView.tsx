"use client";
import getProductList from "@/app/_lib/FoodStandardDoc";
import TableHeader from "@/app/_components/elements/Table/TableHeader";
import TableBody from "@/app/_components/elements/Table/TableBody";
import { TableHeaderProps } from "@/app/_types/props";
import { TableBodyProps } from "@/app/_types/props";

const FoodBaseInfoView = () => {
  const { data, error } = getProductList();

  const headerItems: TableHeaderProps[] = [
    { value: "商品名" },
    { value: "共通商品コード" },
    { value: "ブランド名" },
    { value: "適用日" },
    { value: "メーカー名" },
    { value: "PB／NB分類" },
  ];

  const list: JSX.Element[] = [];
  let bodyItems: TableBodyProps[] = [];
  if (data) {
    data.value.forEach((item) => {
      bodyItems.push({ value: item.product_name });
      bodyItems.push({ value: item.common_products_code });
      bodyItems.push({ value: item.applying_date });
      bodyItems.push({ value: item.maker_name });
      bodyItems.push({ value: item.pb_nb_classification });
      list.push(<TableBody bodies={bodyItems} />);
      bodyItems = [];
    });
  }

  return (
    <>
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <div className="sticky top-0 bg-white">
          <table className="table-auto w-full">
            <TableHeader headers={headerItems} />
          </table>
        </div>
        <div>
          <table className="table-auto w-full">
            <tbody>{list}</tbody>
          </table>
        </div>
      </div>
      {error ? <p>{error}</p> : null}
    </>
  );
};

export default FoodBaseInfoView;
