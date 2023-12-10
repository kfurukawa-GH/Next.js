import { LabelVariants } from "./TailwindVariants";
import { LabelAttributes } from "@/app/_types/tagAttributes";

const Label = (props: LabelAttributes & { children?: React.ReactNode }) => {
  return (
    <label {...props} className={LabelVariants()}>
      {props.children}
    </label>
  );
};

export default Label;
