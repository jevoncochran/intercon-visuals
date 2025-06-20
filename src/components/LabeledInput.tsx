import React from "react";

type Props = {
  label: string;
  placeholder?: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
  isTextArea?: boolean;
  required?: boolean;
};

const LabeledInput = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  type = "text",
  isTextArea = false,
  required = false,
}: Props) => {
  const sharedInputStyles =
    "w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="w-full space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={6}
          className={`${sharedInputStyles} resize-none`}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={sharedInputStyles}
        />
      )}
    </div>
  );
};

export default LabeledInput;
