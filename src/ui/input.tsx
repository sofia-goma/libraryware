"use client";
import React, { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type Props = {
  type: string;
  text: string;
  name?: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  required?: string;
  errors?: FieldErrors<FieldValues>;
  typedata: string;
};

export default function Input({
  type,
  text,
  name,
  placeholder,
  register,
  required,
  typedata,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div
      className={`${
        type === "checkbox"
          ? "flex flex-row-reverse gap-3"
          : "flex flex-col relative w-full"
      }`}
    >
      <label
        htmlFor={name}
        className={`my-1 ${
          type === "checkbox" ? "text-[0.7rem]" : "text-sm"
        } text-white`}
      >
        {text}
      </label>
      <div className="flex items-center ">
        <input
          type={inputType}
          id={name}
          className={`${
            type === "checkbox"
              ? ""
              : "w-full p-[0.3rem] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2D7DC4] focus:border-[#2D7DC4]"
          }`}
          placeholder={placeholder}
          {...register(typedata, {
            required,
            ...(type === "password" && {
              minLength: {
                value: 8,
                message: "Le mot de passe doit comporter au moins 8 caractères",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Le mot de passe doit contenir au moins une lettre et un chiffre",
              },
            }),
            ...(type === "tel" && {
              pattern: {
                value: /^\+?[1-9]\d{1,12}$/,
                message: "Veuillez entrer un numéro de téléphone valide.",
              },
            }),
          })}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute right-3 focus:outline-none text-slate-400"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
}