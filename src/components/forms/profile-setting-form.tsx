"use client";
import { z } from "zod";
import { profileFields } from "@/data/fields";
import CustomForm from "./form";
// import AlertComponent from "../shared/alert-component";

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

  }

  return (
    <>
      <CustomForm
        inputs={profileFields}
        schema={formSchema}
        handleOnSubmit={onSubmit}
        submitLabel="Save Changes"
      />
      <div className="border-border">
        {/* <AlertComponent /> */}
      </div>
    </>
  );
}
