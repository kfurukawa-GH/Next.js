export type LabelAttributes = {
  htmlFor: string;
};

export type InputAttributes = {
  type: "email" | "password";
  id: string;
  name: string;
  placeholder: string;
  required: boolean;
  autoComplete: "email" | "current-password";
};

export type ButtonAttributes = {
  type: "submit" | "reset" | "button";
};
