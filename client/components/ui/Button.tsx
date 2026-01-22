import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        const variants = {
            primary: "bg-[#1A1A1A] text-white hover:bg-prime-gold hover:text-white border border-transparent hover:border-prime-gold",
            outline: "border border-[#1A1A1A] text-[#1A1A1A] hover:bg-prime-gold hover:text-white hover:border-prime-gold",
            ghost: "text-[#1A1A1A] hover:text-prime-gold hover:bg-transparent",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "px-6 py-2 rounded-md transition-all duration-300 font-serif tracking-wide",
                    variants[variant],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
