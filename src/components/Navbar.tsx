import { AutoStoriesOutlined, Menu } from '@mui/icons-material'
import { OptionsNavbar } from './OptionsNavbar'

export function Navbar() {
  return (
    <div className="fixed left-0 top-0 flex w-screen items-center justify-between bg-background p-8 shadow-md">
      <a href="/" className="cursor-pointer">
        <AutoStoriesOutlined /> Leretec
      </a>
      <OptionsNavbar>
        <Menu className="cursor-pointer" />
      </OptionsNavbar>
    </div>
  )
}
