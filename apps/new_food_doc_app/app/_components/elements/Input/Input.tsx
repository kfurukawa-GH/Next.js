"use client";
import { useState } from "react";
import { InputVariants } from "./TailwindVariants";
import { InputAttributes } from "@/app/_types/tagAttributes";

const Input = (props: InputAttributes & { children?: React.ReactNode }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      {...props}
      value={inputValue}
      onChange={handleInputChange}
      className={InputVariants()}
    />
  );
};

export default Input;
