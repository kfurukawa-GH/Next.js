import FoodBaseInfoCard from "../_components/FoodBaseInfoCard";
import FoodInfoTabs from "../_components/FoodInfoTabs";

export default function foodStandardDocDisplayPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <FoodBaseInfoCard id={params.id} />
      <FoodInfoTabs id={params.id} />
    </div>
  );
}
