import { AutoStoriesOutlined, Menu } from '@mui/icons-material'
import { OptionsNavbar } from './OptionsNavbar'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function Navbar() {
  return (
    <div className="fixed left-0 top-0 flex w-screen items-center justify-between bg-background p-8 shadow-md lg:dark:border-b-[1px] lg:dark:border-b-muted-foreground">
      <a href="/" className="cursor-pointer">
        <AutoStoriesOutlined /> Leretec
      </a>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <OptionsNavbar>
            <TooltipTrigger>
              <Menu className="cursor-pointer" />
            </TooltipTrigger>
          </OptionsNavbar>
          <TooltipContent side="bottom" align="center">
            <p>Menu aluno</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
