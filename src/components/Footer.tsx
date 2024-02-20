import { AutoStoriesOutlined } from '@mui/icons-material'
import { Separator } from './Separator'

export function Footer() {
  return (
    <div className="mt-8 space-y-4 bg-slate-800 p-8">
      <h2 className="headline flex w-fit items-center gap-2 text-center text-white">
        <AutoStoriesOutlined />
        Leretec
      </h2>
      <Separator />
      <p className="body text-center text-white">
        © {String(new Date().getFullYear())} - Leretec
      </p>
    </div>
  )
}
