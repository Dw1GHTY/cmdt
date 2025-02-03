"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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

const formSchema = z.object({
  LOCATION: z.string().min(2).max(50),
  DESCRIPTION: z.string().min(2).max(50),
  LINK: z.string().min(2).max(50),
});

const CreateCompanyForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      LOCATION: "",
      DESCRIPTION: "",
      LINK: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="flex size-fit rounded-md">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col space-y-8"
        >
          <FormField
            control={form.control}
            name="LOCATION"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Example: FT. Lauderdale, MI, FL"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Location of the Franchise. The input will be displayed on the
                  front page and mobile menu
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="DESCRIPTION"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="A biogenetics Franchise of CMDT"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Short description of the Franchise
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="LINK"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="https://www.google.com" {...field} />
                </FormControl>
                <FormDescription>
                  A link towards the website of the new Franchise, not mandatory
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-32 bg-green-700" type="submit">
            Add Franchise
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateCompanyForm;
