import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("relative mx-auto w-full max-w-4xl bg-gray-950", className)}
    >
      {children}
    </div>
  );
};
