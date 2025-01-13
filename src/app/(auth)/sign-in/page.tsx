"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signInSchema } from "@/schemas/signInSchema";
import { signIn } from "next-auth/react";

const SignInPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { toast } = useToast();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  // zod implementation
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    const result = await signIn("credentials", {
      redirect: false,
      identifier: data.identifier,
      password: data.password,
    });
    if (result?.error) {
      if (result.error == "CredentialsSignIn") {
        toast({
          title: "Login Failed",
          description: "Incorrect Username or password",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        });
      }
    }

    if (result?.url) {
      router.replace("/dashboard");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-8 space-y-8 bg-black border-[2px] rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
            Join Anonymous Feedback
          </h1>
          <p className="mb-4">Sign in to start your anonymous adventure</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="identifier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email/Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email/Username"
                      {...field}
                      className="text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="password"
                      {...field}
                      className="text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="border-[1px]" type="submit">
              Sign In
            </Button>
          </form>
        </Form>

        <div className="text-center mt-4">
          <p>
            New member?{" "}
            <Link href="/sign-up" className="text-blue-600 hover:text-blue-800">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
