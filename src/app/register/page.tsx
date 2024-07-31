"use client";

import Button from "@/ui/button";
import Input from "@/ui/input";
import Logo from "@/ui/logo";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MyContext } from "@/lib/context";
import { toastError } from "@/lib/toast";

type Props = {};

export default function Page({}: Props) {
  const { setState }: { setState?: Dispatch<SetStateAction<object>> } =
    useContext(MyContext);

  if (!setState) {
    throw new Error("setState is not defined in MyContext");
  }

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      if (data.password !== data.confirmpassword)
        throw new Error("Les mots de passe sont incoherent");
      setState(data);
      router.push("/register/category");
    } catch (error: any) {
      toastError(error.message);
    }
  };

  const onError = (errors: FieldValues) => {
    Object.values(errors).forEach((error) => {
      toastError(error.message);
    });
  };
  return (
    <main className="flex items-center h-[100vh] w-screen form">
      <div className="m-[4vw] w-1/2">
        <Logo active={false} />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="bg-[#3c596899] h-auto p-[4vw] rounded-[30px] w-[40vw]">
          <div className="flex flex-col items-center text-[#f2efdd] gap-2 mb-3">
            <h1 className="text-lg text-[#f2efdd]">
              Bienvenue dans à LibraryWare !
            </h1>
          </div>
          <form
            className="flex flex-col items-center"
            action=""
            method=""
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <div className="flex gap-2">
              <Input
                text="Prénom"
                type="text"
                placeholder="ex:Landry"
                register={register}
                errors={errors}
                typedata="firstname"
              />
              <Input
                text="Nom"
                type="text"
                placeholder="ex:Bitege"
                register={register}
                required={"Votre nom et obligatoire"}
                errors={errors}
                typedata="name"
              />
            </div>
            <Input
              text="Email"
              type="email"
              placeholder="ex:libraryware@gmail.com"
              register={register}
              required={"Email obligatoire"}
              errors={errors}
              typedata="email"
            />
            <Input
              text="Téléphone"
              type="tel"
              placeholder="ex:+243987654321"
              register={register}
              required={"Téléphone obligatoire"}
              errors={errors}
              typedata="number"
            />
            <Input
              text="Mot de passe"
              type="password"
              placeholder=""
              register={register}
              required={"Mot de passe obligatoire"}
              errors={errors}
              typedata="password"
            />
            <Input
              text="Confirmer le mot de passe"
              type="password"
              placeholder=""
              register={register}
              required={"Mot de passe obligatoire"}
              errors={errors}
              typedata="confirmpassword"
            />
            <div className=" flex items-center justify-between w-full">
              <Input
                text="Souviens-toi de moi"
                type={"checkbox"}
                name="checkbox"
                register={register}
                errors={errors}
                typedata="remember"
              />
            </div>
            <Button submit={true} text={"S'enregister"} active={true} />
            <div className=" flex items-center justify-between w-full pt-2">
              <Link
                href="/login"
                className="text-[0.8rem] text-[#f2efdd] hover:text-[#574c4a]"
              >
                Vous avez un compte? Connectez-vous
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
