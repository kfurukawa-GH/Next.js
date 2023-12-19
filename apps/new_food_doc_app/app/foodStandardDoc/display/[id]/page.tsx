import FoodBaseInfoCard from "../_components/FoodBaseInfoCard";
import FoodInfoTabs from "../_components/FoodInfoTabs";

export default function foodStandardDocDisplayPage({
  params,
}: {
  params: { id: string };
}) {
  console.log("ID:", params.id);

  return (
    <div>
      <FoodBaseInfoCard />
      <FoodInfoTabs />
    </div>
  );
}
