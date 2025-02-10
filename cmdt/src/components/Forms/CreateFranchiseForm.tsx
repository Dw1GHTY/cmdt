"use client";
import React, { useState } from "react";
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
import { franchiseSchema } from "@/lib/schemas";

const CreateFranchiseForm: React.FC = () => {
  const form = useForm<z.infer<typeof franchiseSchema>>({
    resolver: zodResolver(franchiseSchema),
    defaultValues: {
      LOCATION: "",
      DESCRIPTION: "",
      LINK: "",
      IMAGE: "",
    },
  });

  const [base64Image, setBase64Image] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert to Base64
      reader.onloadend = () => {
        setBase64Image(reader.result as string); // Store Base64
      };
    }
  };

  const handleSubmit = async (data: z.infer<typeof franchiseSchema>) => {
    const formData = new FormData();
    formData.append("LOCATION", data.LOCATION);
    formData.append("DESCRIPTION", data.DESCRIPTION);
    formData.append("LINK", data.LINK);

    if (base64Image) {
      formData.append("IMAGE", base64Image);
    }

    await addFranchise(formData);
  };

  return (
    <div className="flex size-fit rounded-md">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col space-y-8"
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
                <FormDescription>Location of the Franchise.</FormDescription>
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
                  A link to the franchise website
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormItem>
            <FormLabel>Location picture</FormLabel>
            <FormControl>
              {/* //! svaki put kada se ucita novi fajl prolazi kroz handler
              // !koji ga konvertuje u base64 string format */}
              <Input type="file" accept="image/*" onChange={handleFileChange} />
            </FormControl>
            <FormDescription>Image of the Franchise.</FormDescription>
            <FormMessage />
          </FormItem>
          <Button className="w-32 bg-green-700" type="submit">
            Add Franchise
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateFranchiseForm;
