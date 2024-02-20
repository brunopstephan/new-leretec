import { AutoStoriesOutlined, Menu } from '@mui/icons-material'

export function Navbar() {
  return (
    <div className="fixed left-0 top-0 flex w-screen items-center justify-between bg-slate-100 p-8 shadow-md">
      <a href="/" className="cursor-pointer">
        <AutoStoriesOutlined /> Leretec
      </a>
      <Menu className="cursor-pointer" />
    </div>
  )
}
