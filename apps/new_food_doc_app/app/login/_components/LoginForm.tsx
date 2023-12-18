"use client";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import Label from "@/app/_components/elements/Label/Label";
import Button from "@/app/_components/elements/Button/Button";
import Input from "@/app/_components/elements/Input/Input";
import { InputAttributes } from "@/app/_types/tagAttributes";

async function authLogin(
  url: string,
  { arg }: { arg: { email: string; password: string } }
) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  }).then((res) => res);
}

const LoginForm = () => {
  const router = useRouter();
  const { trigger } = useSWRMutation("http://127.0.0.1:4010/login", authLogin);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

    try {
      const res = await trigger({ email, password });
      console.log("Login successful");
      if (res.ok) {
        router.push("./foodStandardDoc/display/");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

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
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Label htmlFor={emailTagAttributes.id}>Email address</Label>
      <Input {...emailTagAttributes} />
      <Label htmlFor={passwordTagAttributes.id}>Password</Label>
      <Input {...passwordTagAttributes} />
      <Button type="submit">Sign in</Button>
    </form>
  );
};

export default LoginForm;
