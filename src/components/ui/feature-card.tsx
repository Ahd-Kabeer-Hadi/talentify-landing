import * as React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  index?: number;
  variant?: "default" | "animated";
  className?: string;
  children?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  index = 0,
  variant = "default",
  className,
  children,
}) => {
  if (variant === "animated") {
    return (
      <div
        className={cn(
          "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
          (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
          index < 4 && "lg:border-b dark:border-neutral-800",
          className
        )}
      >
        {index < 4 ? (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-white dark:from-neutral-800 to-transparent pointer-events-none" />
        ) : (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-white dark:from-neutral-800 to-transparent pointer-events-none" />
        )}
        <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400 group-hover/feature:text-primary">
          {icon}
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
            {title}
          </span>
        </div>
        <p className="text-base text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
          {description}
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "p-4 sm:p-8 relative overflow-hidden bg-background shadow-md rounded-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

interface FeatureTitleProps {
  children?: React.ReactNode;
  className?: string;
}

const FeatureTitle: React.FC<FeatureTitleProps> = ({ children, className }) => {
  return (
    <p
      className={cn(
        "max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug",
        className
      )}
    >
      {children}
    </p>
  );
};

interface FeatureDescriptionProps {
  children?: React.ReactNode;
  className?: string;
}

const FeatureDescription: React.FC<FeatureDescriptionProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={cn(
        "text-base md:text-base max-w-4xl text-left mx-auto text-center font-normal text-left max-w-sm mx-0 md:text-base my-2",
        className
      )}
    >
      {children}
    </p>
  );
};

interface FeatureButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "animated";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

const FeatureButton: React.FC<FeatureButtonProps> = ({
  children,
  variant,
  size,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export { FeatureCard, FeatureTitle, FeatureDescription, FeatureButton };
