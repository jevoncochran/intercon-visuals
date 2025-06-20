import React from "react";

interface Props {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

const FormLayout = ({ onSubmit, children }: Props) => {
  return (
    <form className="w-full space-y-4" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default FormLayout;
