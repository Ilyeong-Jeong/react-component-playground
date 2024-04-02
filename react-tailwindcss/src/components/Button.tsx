import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '../utils/style';

export const ButtonVariants = cva(
  `
  flex items-center justify-center 
  bg-gray-950 text-white
  rounded-sm text-base font-medium
  `,
  {
    variants: {
      variant: {
        default: 'shadow-none',
        grey: 'bg-gray-150 text-gray-950',
        red: 'bg-red-600',
      },
      size: {
        default: 'px-2 py-1',
        md: 'px-4 py-2',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-8 py-4 text-xl',
      },
      isBlue: {
        true: 'bg-[#3b5fd9]',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      isBlue: false,
    },
  },
);

interface ButtonProps extends VariantProps<typeof ButtonVariants> {
  className?: string;
  children?: React.ReactNode;
}

function Button({ variant, size, isBlue, className, children }: ButtonProps) {
  return (
    <button className={cn(ButtonVariants({ variant, size, isBlue, className }))}>
      {children && children}
    </button>
  );
}

export default Button;
