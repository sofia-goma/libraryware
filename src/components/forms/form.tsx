"use client";

import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import { FormFieldData } from "@/data/fields";

import { z, ZodObject } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormProps {
  inputs: FormFieldData[];
  handleOnSubmit: SubmitHandler<FieldValues>;
  schema?: ZodObject<any>;
  loading?: boolean;
  initialValues?: FieldValues;
  submitLabel?: string;
}

const defaultFormSchema = z.object({});

export default function CustomForm({
  inputs,
  handleOnSubmit,
  schema = defaultFormSchema,
  loading = false,
  initialValues = {},
  submitLabel = "Submit",
}: FormProps) {
  const form = useForm<FieldValues>({
    resolver: zodResolver(schema),
    defaultValues: initialValues,
  });

  const { reset } = form;

  useEffect(() => {
    if (initialValues && Object.keys(initialValues).length > 0) {
      reset(initialValues);
    }
  }, [initialValues, reset]);

  const onSubmit: SubmitHandler<z.infer<any>> = (data) => {
    handleOnSubmit(data);
    reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {inputs.map((input) => (
          <FormField
            key={input.name}
            control={form.control}
            name={input.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{input.label}</FormLabel>
                <FormControl>
                  {input.type === "textarea" ? (
                    <Textarea placeholder={input.placeholder} {...field} />
                  ) : (
                    <Input
                      type={input.type}
                      placeholder={input.placeholder}
                      {...field}
                    />
                  )}
                </FormControl>
                {input.description && (
                  <FormDescription>{input.description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : submitLabel}
        </Button>
      </form>
    </Form>
  );
}
