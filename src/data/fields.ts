console.log('ehll')
export interface FormFieldData {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  description?: string;
  // options?: (inputValue: string) => Promise<OptionType[]>;
}

export const profileFields = [
  {
    name: "upload",
    type: "file",
    label: "Change your Profile Photo",
    placeholder: "",
  },
  {
    name: "bio",
    type: "textarea",
    label: "Bio",
    placeholder: "Tell us about your self",
  },
  {
    name: "location",
    type: "text",
    label: "Location",
    placeholder: "Goma",
  },
];
