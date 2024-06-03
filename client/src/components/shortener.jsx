import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "@/helpers/formSchema";

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
import { useToast } from "@/components/ui/use-toast";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import axios from "axios";
import { serverUrl } from "@/helpers/Constants";
import { useState } from "react";
import Spinner from "./spinner";
import ShortenedDialog from "./shortenedDialog";

export function ShortenerForm() {
  const [urlResponse, setUrlResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [dialog, setDialog] = useState(false);

  const { toast } = useToast();

  const callToast = () => {
    toast({
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      className: "bg-[#111629] text-white border-1 border-black shadow-xl",
    });
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullUrl: "",
    },
  });

  // 2. Define a submit handler.

  async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    setIsLoading(true);
    setError(null);

    try {
      let response = await axios.post(`${serverUrl}/`, {
        fullUrl: values.fullUrl,
      });
      setUrlResponse(response.data);
      console.log(response.data);
      setDialog(true);
    } catch (error) {
      setError(error);
      console.log(`The error is ${error}`);
      callToast();
    } finally {
      setIsLoading(false);
    }

    console.log(values.fullUrl);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
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
                    autoComplete="off"
                  />
                </FormControl>
                <FormMessage className="ml-2 text-base" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-[#144EE3] hover:bg-[#144fe3c9] p-5 select-none"
          >
            Shorten Now
          </Button>
        </form>
        {isLoading ? <Spinner /> : ""}
      </Form>
      <Dialog open={dialog} onOpenChange={setDialog}>
        <DialogContent className="bg-[#0B0F1B] border-none w-fit">
          <ShortenedDialog urlResponse={urlResponse} />
        </DialogContent>
      </Dialog>
    </>
  );
}
