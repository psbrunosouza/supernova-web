import { cva } from 'class-variance-authority';

export const inputContainerVariants = cva([
  'flex',
  'h-md',
  'items-center',
  'gap-2',
  'bg-base-300',
  'rounded-xl',
  'border',
  'border-border',
  'px-md',
  'focus-within:ring-2',
  'focus-within:ring-primary',
  'focus-within:ring-offset-2',
  'focus-within:ring-offset-base-100',
]);

export const inputVariants = cva(
  ['w-full', 'outline-0', 'text-content', 'placeholder:text-muted'],
  {
    variants: {
      disabled: {
        true: ['cursor-not-allowed', 'text-muted', 'opacity-50'],
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);
