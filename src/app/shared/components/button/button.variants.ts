import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'h-md',
    'w-full',
    'rounded-lg',
    'font-bold',
    'uppercase',
    'cursor-pointer',
    'transition-opacity',
    'hover:opacity-90',
  ],
  {
    variants: {
      appearance: {
        filled: '',
        outline: 'border bg-transparent',
        ghost: 'bg-transparent',
      },
      color: {
        primary: '',
        accent: '',
        success: '',
        warning: '',
        error: '',
      },
      disabled: {
        true: 'pointer-events-none cursor-not-allowed opacity-50',
      },
    },

    compoundVariants: [
      // Filled
      {
        appearance: 'filled',
        color: 'primary',
        class: 'bg-primary text-primary-content',
      },
      {
        appearance: 'filled',
        color: 'accent',
        class: 'bg-accent text-accent-content',
      },
      {
        appearance: 'filled',
        color: 'success',
        class: 'bg-success text-success-content',
      },
      {
        appearance: 'filled',
        color: 'warning',
        class: 'bg-warning text-warning-content',
      },
      {
        appearance: 'filled',
        color: 'error',
        class: 'bg-error text-error-content',
      },

      // Outline
      {
        appearance: 'outline',
        color: 'primary',
        class: 'border-primary text-primary',
      },
      {
        appearance: 'outline',
        color: 'accent',
        class: 'border-accent text-accent',
      },
      {
        appearance: 'outline',
        color: 'success',
        class: 'border-success text-success',
      },
      {
        appearance: 'outline',
        color: 'warning',
        class: 'border-warning text-warning',
      },
      {
        appearance: 'outline',
        color: 'error',
        class: 'border-error text-error',
      },

      // Ghost
      {
        appearance: 'ghost',
        color: 'primary',
        class: 'text-primary',
      },
      {
        appearance: 'ghost',
        color: 'accent',
        class: 'text-accent',
      },
      {
        appearance: 'ghost',
        color: 'success',
        class: 'text-success',
      },
      {
        appearance: 'ghost',
        color: 'warning',
        class: 'text-warning',
      },
      {
        appearance: 'ghost',
        color: 'error',
        class: 'text-error',
      },
    ],

    defaultVariants: {
      appearance: 'filled',
      color: 'primary',
      disabled: false,
    },
  },
);
