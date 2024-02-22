import { ComponentProps, forwardRef } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import '../styles/button.css'

const button = tv({
  base: 'btn',
  variants: {
    color: {
      primary: 'btn-primary',
      success: 'btn-success',
      danger: 'btn-danger',
      warning: 'btn-warning',
    },
    size: {
      xs: 'p-1 body',
      sm: 'p-2 body',
      lg: 'p-6 headline',
    },
    variant: {
      outlined: 'outlined',
      ghost: 'ghost',
    },
    rounded: {
      true: 'rounded-full',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
})

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    className?: string
  }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { color, className, size, variant, rounded, ...props },
    forwardedRef,
  ) {
    return (
      <button
        ref={forwardedRef}
        className={button({ size, color, variant, rounded, class: className })}
        {...props}
      ></button>
    )
  },
)
