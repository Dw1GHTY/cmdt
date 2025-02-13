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
import { contactUsSchema } from "@/lib/schemas";
import { Textarea } from "../ui/textarea";

const ContactUsForm = () => {
  const form = useForm<z.infer<typeof contactUsSchema>>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      company: "",
      specificProduct: "",
      industry: "",
      additionalMessage: "",
    },
  });
  async function sendEmail(data: z.infer<typeof contactUsSchema>) {
    fetch("https://cmdt.vercel.app/api/email/contact", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  }
  async function onSubmit(values: z.infer<typeof contactUsSchema>) {
    console.log(values);
    try {
      await sendEmail(values);
    } catch (err) {
      alert(`Error sending email!, error: ${err}`);
    } finally {
    }
  }
  return (
    <div
      className="flex border-2 py-2 px-3 size-fit  
    bg-white border-blue-500 rounded-md shadow-lg shadow-blue-400"
    >
      <Form {...form}>
        <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
          {/* fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormDescription>Your first name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormDescription>Your last name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Sample Company LTD" {...field} />
                  </FormControl>
                  <FormDescription>
                    Provide us with your company name
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@email.com" {...field} />
                  </FormControl>
                  <FormDescription>Your email address</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="1-441-995-7377" {...field} />
                  </FormControl>
                  <FormDescription>Any relevant phone number</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="specificProduct"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specific product</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* //! INDUSTRY IS A DROPDOWN */}
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry</FormLabel>
                  <FormControl>
                    <Input placeholder="IT, economics, law . . ." {...field} />
                  </FormControl>
                  <FormDescription>Your field of work</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="additionalMessage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message"
                      className=""
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Feel free to add any additional inquries if you have such
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* button */}
          <div className="flex justify-center items-center w-full my-2">
            <Button type="submit" className="flex bg-green-400 w-full md:w-1/3">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactUsForm;
