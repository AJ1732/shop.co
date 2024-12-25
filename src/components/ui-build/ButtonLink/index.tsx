import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ButtonLinkProps } from "@/types/button";
import { cn } from "@/lib/utils";

export default function ButtonDemo({
  link,
  disabled,
  children,
  className,
  onClick,
}: ButtonLinkProps) {
  if (link) {
    return (
      <Link
        href={link}
        className={cn(
          buttonVariants({ className }),
          "rounded-full transition-all duration-300 active:scale-[0.99]",
        )}
      >
        {children}
      </Link>
    );
  }
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "rounded-full px-6 py-4 transition-all duration-300 active:scale-[0.99]",
        className,
      )}
    >
      {children}
    </Button>
  );
}
