"use client";
import useSWRMutation from "swr/mutation";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Label from "@/app/_components/elements/Label/Label";
import Button from "@/app/_components/elements/Button/Button";
import Input from "@/app/_components/elements/Input/Input";
import { InputAttributes } from "@/app/_types/tagAttributes";
import Modal from "@/app/_components/elements/Modal/Modal";

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
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { trigger } = useSWRMutation("http://127.0.0.1:4010/login", authLogin);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 8;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

    if (!validateEmail(email)) {
      console.error("Invalid email address");
      setErrorMessage("メールアドレスの形式が正しくありません。");
      setShowModal(true);
      return;
    }

    if (!validatePassword(password)) {
      console.error("Password must be at least 8 characters long");
      setErrorMessage("パスワードは8桁以上で入力してください。");
      setShowModal(true);
      return;
    }

    try {
      const res = await trigger({ email, password });
      console.log(res);
      if (res.ok) {
        router.push("./foodStandardDoc/view/");
      } else {
        console.log("Login failed");
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
      <Modal
        isOpen={showModal}
        onClose={handleModalClose}
        message={errorMessage}
      />
    </form>
  );
};

export default LoginForm;
