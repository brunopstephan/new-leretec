import { RocketLaunchOutlined } from '@mui/icons-material'
import { Button } from '@/components/ui/button'
import { ReactNode } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/components/ThemeProvider'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { getTheme } from '@/utils'

interface OptionsNavbarProps {
  children: ReactNode
}

export function OptionsNavbar({ children }: OptionsNavbarProps) {
  const { setTheme } = useTheme()

  function handleChangeTheme(theme: 'light' | 'dark' | 'system') {
    setTheme(theme)
  }

  const theme = getTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="p-2">
        <DropdownMenuLabel>Olá aluno!</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Button variant="secondary" className="w-full justify-start gap-2">
          <RocketLaunchOutlined sx={{ fontSize: 16 }} /> Enviar História
        </Button>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Selecione um tema!</DropdownMenuLabel>
        <ToggleGroup
          defaultValue={theme}
          onValueChange={handleChangeTheme}
          type="single"
        >
          <ToggleGroupItem value="light">Light</ToggleGroupItem>
          <ToggleGroupItem value="dark">Dark</ToggleGroupItem>
          <ToggleGroupItem value="system">Sistema</ToggleGroupItem>
        </ToggleGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
