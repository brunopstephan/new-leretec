import { VariantProps, tv } from 'tailwind-variants'

const separator = tv({
  base: ' h-[1px] w-full',
  variants: {
    color: {
      light: 'bg-slate-200',
      dark: 'bg-slate-800',
    },
  },
  defaultVariants: {
    color: 'light',
  },
})

interface SeparatorProps extends VariantProps<typeof separator> {
  className?: string
}

export function Separator({ className, color }: SeparatorProps) {
  return <div className={separator({ color, class: className })}></div>
}
