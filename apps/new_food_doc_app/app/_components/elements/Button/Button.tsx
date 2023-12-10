import { ButtonVariants } from "./TailwindVariants";
import { ButtonAttributes } from "@/app/_types/tagAttributes";

const Button = (props: ButtonAttributes & { children?: React.ReactNode }) => {
  return (
    <button type={props.type} className={ButtonVariants()}>
      {props.children}
    </button>
  );
};

export default Button;
