"use client";

import { z } from "zod";
import { profileFields } from "@/data/fields";

import CustomForm from "./Form";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export default function ProfileSettingForm() {
  function onSubmit(values: z.infer<any>) {
    console.log(values);
  }

  return (
    <CustomForm
      inputs={profileFields}
      schema={formSchema}
      handleOnSubmit={onSubmit}
      submitLabel="Save Changes"
    />
  );
}
