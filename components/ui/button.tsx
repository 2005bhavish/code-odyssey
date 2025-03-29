import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-600 text-white hover:from-indigo-700 hover:via-purple-600 hover:to-blue-400 hover:shadow-[0_0_15px_rgba(173,216,230,0.7)]",
        destructive:
          "bg-red-800 text-white hover:bg-red-600 hover:shadow-[0_0_15px_rgba(255,99,71,0.8)]",
        outline:
          "border border-blue-400/50 bg-transparent text-white hover:bg-blue-800/30 hover:border-blue-400/70 hover:shadow-[0_0_15px_rgba(100,149,237,0.7)]",
        secondary:
          "bg-gray-900 text-white hover:bg-gray-700 hover:shadow-[0_0_15px_rgba(169,169,169,0.8)]",
        ghost:
          "hover:bg-purple-950/30 hover:text-white hover:shadow-[0_0_15px_rgba(138,43,226,0.6)]",
        link:
          "text-cyan-300 underline-offset-4 hover:underline hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]",
      },
      size: {
        default: "h-10 px-6 py-2.5",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-10",
        icon: "h-10 w-10 flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

