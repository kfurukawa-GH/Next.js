import { StaticImageData } from "next/image";
import Image from "next/image";
import DescriptionList from "@/app/_components/elements/List/DescriptionList";
import { CardClasses } from "./CardClasses";

type Prop = {
  imageAsset: StaticImageData;
  items: { term: string; description: string }[];
  items2: { term: string; description: string }[];
};

const Card = ({ imageAsset, items, items2 }: Prop) => {
  return (
    <div className={CardClasses()}>
      <div className="flex-none h-full w-1/6 relative p-3">
        <Image src={imageAsset} alt="食品画像" className="object-cover h-full w-full rounded-xl" priority />
      </div>
      <div className="flex-1">
        {items.map((item) => (
          <DescriptionList term={item.term} description={item.description} />
        ))}
      </div>
      <div className="flex-1">
        {items2.map((item) => (
          <DescriptionList term={item.term} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Card;
