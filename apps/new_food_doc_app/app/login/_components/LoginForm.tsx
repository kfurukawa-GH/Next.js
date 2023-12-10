import { InputAttributes } from "@/app/_types/tagAttributes";
import Label from "@/app/_components/elements/Label/Label";
import Button from "@/app/_components/elements/Button/Button";
import Input from "@/app/_components/elements/Input/Input";

const LoginForm = () => {
  const emailTagAttributes: InputAttributes = {
    type: "email",
    id: "email",
    name: "email",
    placeholder: "name@company.com",
    required: true,
    autoComplete: "email",
  };

  const passwordTagAttributes: InputAttributes = {
    type: "password",
    id: "password",
    name: "password",
    placeholder: "••••••••",
    required: true,
    autoComplete: "current-password",
  };

  return (
    <form className="space-y-4">
      <Label htmlFor={emailTagAttributes.id}>Email address</Label>
      <Input {...emailTagAttributes} />
      <Label htmlFor={passwordTagAttributes.id}>Password</Label>
      <Input {...passwordTagAttributes} />
      <Button type="submit">Sign in</Button>
    </form>
  );
};

export default LoginForm;
