/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { StarIcon } from "./Widget";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function FeedbackForm({ setSubmitted }) {
  const [rating, setRating] = useState(3);

  const onSelect = (index) => {
    setRating(index + 1);
  };

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      feedback: "",
    },
  });

  function onSubmit(values) {
    const data = {
      ...values,
      rating,
    };
    setSubmitted(true);
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <h3 className="font-semibold text-xl">Send us your feedback</h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe" {...field} />
                  </FormControl>
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
                    <Input
                      type="email"
                      placeholder="test@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="feedback"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your feedback."
                    {...field}
                    className="min-h-[100px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Rating</h3>
          <div className="flex items-center gap-2">
            {[...new Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className={cn(
                  "size-5 cursor-pointer",
                  rating > index ? "fill-primary" : "stroke-muted-foreground"
                )}
                onClick={() => onSelect(index)}
              />
            ))}
          </div>
        </div>

        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </form>
    </Form>
  );
}
