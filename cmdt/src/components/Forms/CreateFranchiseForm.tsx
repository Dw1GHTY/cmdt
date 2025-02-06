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
import { addFranchise } from "@/lib/actions";

const formSchema = z.object({
  LOCATION: z.string().min(2).max(50),
  DESCRIPTION: z.string().min(2).max(50),
  LINK: z.string().min(2).max(50),
  IMAGE: z.string().optional(),
});

const CreateFranchiseForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      LOCATION: "",
      DESCRIPTION: "",
      LINK: "",
      IMAGE: "",
    },
  });

  return (
    <div className="flex size-fit rounded-md">
      <Form {...form}>
        <form action={addFranchise} className=" flex flex-col space-y-8">
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
                <FormLabel>Franchise Link</FormLabel>
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
          <FormField
            control={form.control}
            name="IMAGE"
            render={({ field: { onChange, ...rest } }) => (
              <FormItem>
                <FormLabel>Location picture</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.readAsDataURL(file); // Convert to Base64
                        reader.onloadend = () => {
                          form.setValue("IMAGE", reader.result as string); // Store Base64
                        };
                      }
                    }}
                  />
                </FormControl>
                <FormDescription>
                  Image of the Franchise to be displayed on the main page
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

export default CreateFranchiseForm;
