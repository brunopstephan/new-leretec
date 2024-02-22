import { RocketLaunchOutlined } from '@mui/icons-material'
import { Button } from './Button'
import { ReactNode } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface OptionsNavbarProps {
  children: ReactNode
}

export function OptionsNavbar({ children }: OptionsNavbarProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="p-2">
        <DropdownMenuLabel>Olá aluno!</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Button
          color="primary"
          variant="ghost"
          className="w-full justify-start"
          size="xs"
        >
          <RocketLaunchOutlined sx={{ fontSize: 16 }} /> Enviar História
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
