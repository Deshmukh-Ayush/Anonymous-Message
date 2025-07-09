"use client";

import { MoveRight, Shield } from "lucide-react";
import { Container } from "@/components/container";

import { Cherry_Cream_Soda } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LandingCard } from "@/components/landingCard";

const cherryCreamSoda = Cherry_Cream_Soda({
  weight: ["400"],
  subsets: ["latin"],
});
import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-gray-950 py-8">
      <Container className="w-full max-w-5xl px-4">
        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="h-[60vh] bg-[url('/japan.jpg')] bg-cover bg-center rounded-lg p-8 flex flex-col justify-center items-center text-center"
        >
          <h1
            className={`${cherryCreamSoda.className} text-4xl md:text-5xl font-bold text-neutral-100`}
          >
            Whispr
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 tracking-tight mt-2">
            Share your voice, Stay Anonymous.
          </p>
          <Link href="/sign-in">
            <Button
              className="group mt-6 px-12 py-3 bg-white/10 hover:bg-white/20 text-neutral-100 backdrop-blur-sm border border-transparent hover:border-white/30"
              variant={"outline"}
            >
              Sign In
              <MoveRight className="ml-2 transform transition-transform duration-300 group-hover:rotate-[-45deg]" />
            </Button>
          </Link>
        </motion.div>

        <div className="mt-12">
          <h2 className="py-4 text-2xl md:text-3xl font-bold text-neutral-200 text-center">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-4">
            <LandingCard
              imageUrl="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
              title="1. Sign up & get your link"
            />
            <LandingCard
              imageUrl="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D"
              title="2. Share your link with friends"
            />
            <LandingCard
              imageUrl="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
              title="3. Receive anonymous messages"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="py-4 text-2xl md:text-3xl font-bold text-gray-200 text-center">
            Why Whispr?
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-4">
            <div className="h-12 w-full md:w-auto rounded-lg bg-gray-900 flex gap-4 items-center px-6">
              <Shield className="text-white" />
              <h4 className="text-sm font-medium text-white">
                Complete Privacy
              </h4>
            </div>
            <div className="h-12 w-full md:w-auto rounded-lg bg-gray-900 flex gap-4 items-center px-6">
              <Shield className="text-white" />
              <h4 className="text-sm font-medium text-white">Secure & Safe</h4>
            </div>
            <div className="h-12 w-full md:w-auto rounded-lg bg-gray-900 flex gap-4 items-center px-6">
              <Shield className="text-white" />
              <h4 className="text-sm font-medium text-white">
                Freedom of Speech
              </h4>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
