import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
  fullUrl: z.string().url(),
});

export function ShortenerForm() {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullUrl: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit("hello"))}
        className="flex justify-start items-start mt-6"
      >
        <FormField
          control={form.control}
          name="fullUrl"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="https://breve.vercel.app"
                  {...field}
                  className="bg-[#181E29] text-[#C9CED6] w-96 p-5 border-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-[#144EE3] hover:bg-[#144fe3c9] p-5">
          Shorten Now
        </Button>
      </form>
    </Form>
  );
}
