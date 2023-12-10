import { DescriptionListVariants } from "./TailwindVariants";

const DescriptionList = (props: { term: string; description: string }) => {
  return (
    <dl className={DescriptionListVariants()}>
      <dd>{props.term}：</dd>
      <dt>{props.description}</dt>
    </dl>
  );
};

export default DescriptionList;
