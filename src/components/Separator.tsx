import { twMerge } from 'tailwind-merge'

interface SeparatorProps {
  className?: string
}

export function Separator({ className }: SeparatorProps) {
  return (
    <div className={twMerge('h-[1px] bg-muted-foreground', className)}></div>
  )
}
