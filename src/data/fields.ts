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
    name: "username",
    type: "text",
    label: "Username",
    placeholder: "John Doe",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "johndoe@gmail.com",
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
    placeholder: "Tokyo",
  },
];
