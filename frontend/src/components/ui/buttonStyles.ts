import { cva } from "class-variance-authority"


const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
        default: "min-h-12 h-auto px-4 py-2", // Comfortable default
        sm: "min-h-10 h-auto px-2 py-1",  // Adjust as needed
        lg: "min-h-14 h-auto px-8 py-4",  // Adjust as needed
        icon: "min-h-8 h-auto px-0 py-0",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  )

export { buttonVariants }; 