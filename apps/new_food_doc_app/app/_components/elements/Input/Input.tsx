import { InputVariants } from "./TailwindVariants";
import { InputAttributes } from "@/app/_types/tagAttributes";

const Input = (props: InputAttributes & { children?: React.ReactNode }) => {
  return <input {...props} className={InputVariants()} />;
};

export default Input;
